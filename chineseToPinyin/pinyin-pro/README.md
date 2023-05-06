[![pinyin-pro Logo](https://t1.wodetu.cn/2022/11/15/168e8a29acc856c48fdef4060c0ba5ad.png)](https://github.com/zh-lx/pinyin-pro)

[![NPM version](https://img.shields.io/npm/v/pinyin-pro.svg)](https://www.npmjs.com/package/pinyin-pro)
[![GITHUB star](https://img.shields.io/github/stars/zh-lx/pinyin-pro.svg)](https://github.com/zh-lx/pinyin-pro)
[![travis-build](https://travis-ci.com/zh-lx/pinyin-pro.svg?branch=main)](https://travis-ci.com/github/zh-lx/pinyin-pro)
[![NPM Downloads](https://img.shields.io/npm/dm/pinyin-pro.svg)](https://npmcharts.com/compare/pinyin-pro?minimal=true)
[![Coverage Status](https://coveralls.io/repos/github/zh-lx/pinyin-pro/badge.svg?branch=main)](https://coveralls.io/github/zh-lx/pinyin-pro?branch=main)
[![MIT-license](https://img.shields.io/npm/l/pinyin-pro.svg)](https://opensource.org/licenses/MIT)
[![GITHUB-language](https://img.shields.io/github/languages/top/zh-lx/pinyin-pro.svg)](https://github.com/zh-lx/pinyin-pro)

### 介绍

`pinyin-pro` 是一个专业的 js 汉字拼音转换库，功能丰富、准确率高、性能优异。

[使用文档](https://pinyin-pro.cn) | [在线运行](https://pinyin-pro.cn/run/run)

### 特色功能

- 获取汉字、词语、句子等多种格式的拼音
- 获取声母
- 获取韵母、韵头、韵腹、韵尾
- 获取拼音首字母
- 获取音调
- 获取多音字的多种拼音
- 支持人名姓氏模式
- 支持自定义拼音
- 支持字符串和数组两种输出形式
- 支持拼音文本匹配功能

### 安装

npm 安装

```html
npm install pinyin-pro
```

浏览器引入

```html
<script src="https://unpkg.com/pinyin-pro"></script>
```

### 使用示例

更多功能的使用说明文档请查看[使用示例](https://pinyin-pro.cn/use/pinyin)

```js
import { pinyin } from 'pinyin-pro';

// 获取带音调拼音
pinyin('汉语拼音'); // 'hàn yǔ pīn yīn'

// 获取数组形式带音调拼音
pinyin('汉语拼音', { type: 'array' }); // ["hàn", "yǔ", "pīn", "yīn"]

// 获取数组形式不带声调的拼音
pinyin('汉语拼音', { toneType: 'none', type: 'array' }); // ["han", "yu", "pin", "yin"]

// 获取带音调韵母
pinyin('汉语拼音', { pattern: 'final' }); // 'àn ǔ īn īn'
```

### 贡献与反馈

参与开源贡献请参照 [pinyin-pro 贡献](./docs/contribute.md)

使用遇到问题或者需要功能支持欢迎提 issue。

技术交流欢迎加微信：

<img src="https://image-1300099782.cos.ap-beijing.myqcloud.com/author.jpg" width="200" height="200" >
