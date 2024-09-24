import fs from 'fs';
import path from 'path';
// import sassVars from 'get-sass-vars';
import { lowerCamel } from '@skax/camel';

function sassVar2JSON() {
  const result = {
    tokens: {},
    vars: {},
  };
  //
  walkSync('./src/styles', function (filePath: string, stat) {
    const name = stat.name.replace(/.scss|.sass/, '');
    const paletteSass = fs.readFileSync(filePath, 'utf-8');

    const lines = paletteSass.split('\n');
    const vars: string[] = lines.filter((line) =>
      /^--/.test(line.replace(/ /gi, ''))
    );
    result.vars[name] = vars.join('');

    const antdToken = vars
      .map((line) => convertToSassVariable(line.replace(/ /gi, '')))
      .reduce((pre, cur) => {
        const kv: string[] = cur.split(':');
        pre[lowerCamel(kv[0], '-')] = kv[1].replace(/;$/, '');
        return pre;
      }, {});
    result.tokens[name] = antdToken;
  });
  return result;
}

function walkSync(currentDirPath: string, callback) {
  fs.readdirSync(currentDirPath, { withFileTypes: true }).forEach(
    function (dirent) {
      const filePath = path.join(currentDirPath, dirent.name);
      if (dirent.isFile()) {
        callback(filePath, dirent);
      }
      // else if (dirent.isDirectory()) {
      //   walkSync(filePath, callback);
      // }
    }
  );
}

function convertToSassVariable(line) {
  return line.replace(/(--[a-z0-9-]+)/gi, (match) => {
    return `${match.substring(2)}`;
  });
}

export default sassVar2JSON;
