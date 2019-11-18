/**
 * 模拟实现webpack
 * 使用抽象语法树 解析语法
 */

const fs = require('fs');
const path = require('path');

const parser = require('@babel/parser'); // 可以得到抽象语法树s
const traverse = require('@babel/traverse').default;
const babel = require('@babel/core');

/**
 * 分析单个文件， 得到文件依赖信息
 * @param {*} filename  入口文件
 * {
    filename, 入口文件
    dependences,  依赖内容
    code //转化后的code 
   }
 */
const moduleAnalyser = (filename) => {
  const content = fs.readFileSync(filename, 'utf-8');
  // 通过@babel/parser得到抽象语法树
  const ast = parser.parse(content, {
    sourceType: 'module'
  });
  const dependences = {}; // 存放文件依赖
  // 遍历抽象语法树，找到对应类型的元素
  traverse(ast, {
    ImportDeclaration({ node }) {
      const dirName = path.dirname(filename)
      const filePath = './' + path.join(dirName, node.source.value)
      dependences[node.source.value] = filePath; // 存放绝对路径的值
    }
    
  });
  /** 将AST转换为对象 */
  const { code } = babel.transformFromAst(ast, null, {
    presets: [
      '@babel/preset-env'
    ]
  })

  console.log(dependences, code);
  return {
    /*入口文件*/
    filename, 
    /** 依赖内容 */
    dependences,
    /** 转化后的code */
    code
  }
}

/** 单个文件分析 */
// const moduleInfo = moduleAnalyser('./src/index.js');
// console.log('moduleInfo', moduleInfo)

/** 依赖图谱 */
const makeDependenciesGraph = (entry) => {
  const entryModule = moduleAnalyser(entry);
  const graphArray = [ entryModule ]; // 存放依赖数组
  /** 从入口依赖开始查找，获取所有文件的依赖信息 */
  for (let i = 0; i < graphArray.length; i++) {
    const item = graphArray[i];
    const { dependences } = item; // 得到入口文件的依赖
    if (dependences) {
      for (let key in dependences) {
        // 按照入口文件的依赖，找到其他依赖，并放到依赖数组中
        graphArray.push(moduleAnalyser(dependences[key]))
      }
    }
  }
  const graph = {}; // 依赖对象
  graphArray.forEach(item => {
    graph[item.filename] = {
      dependences: item.dependences,
      code: item.code
    }
  });
  console.log(graph);
  return graph;
}

const generateCode = (entry) => {
  const dependenceGraph = makeDependenciesGraph(entry);
  const graph = JSON.stringify(dependenceGraph);
  return `
    (function(graph){
      function require(module) {
        function localRequire(relativePath) {
          return require(graph[module].dependences[relativePath])
        }
        var exports = {};
        (function(require, exports, code){
          eval(code);
        })(localRequire, exports, graph[module].code)
        return exports;
      }
      require('${entry}')
    })(${graph})
  `
}

const code = generateCode('./src/index.js');
console.log('***********生成代码*************')
console.log(code)


