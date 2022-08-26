uni-app vue3 (@dcloudio/types) TS类型声明修复
======================
### 这是什么？
uniapp的[官方版本类型声明(@dcloudio/types)](https://www.npmjs.com/package/@dcloudio/types)存在着不兼容Promise化的问题。

根据[官方文档](https://uniapp.dcloud.net.cn/api/#api-promise-%E5%8C%96)，对异步API（如uni.login），当不传success、fail、complete的时候会返回Promise。
然而，官方的类型声明并不兼容这一点，函数被声明为总是不会返回Promise。

本仓库提供了经过修复的uni全局对象下的类型声明，兼容Promise化，当然也支持直接传异步回调。

### 提示！
**本仓库仅适用于uni-app的vue3版本！**
vue2版本的Promise化规则与此不同，详见官方文档。

### 直接使用
本仓库有若干以`v3`开头的分支，每个分支对应一个上游版本，本仓库维护者有空时会拉取@dcloudio/types下vue3版本的最新类型声明，完成好下面所述的打patch步骤，push为对应的分支，并设为默认分支。
因此，如果您没有特殊需求，只需要：
```shell
npm install -D Starrah/uniapp-types-fixed
```
如果您发现master上跟踪的上游版本过旧，请提Issue（当然，PR更好，详见下一段），我看到后会进行更新。

或者，您也可以查看分支列表，自行安装合适的分支。

### 自己打patch
如果您不想直接从这个github安装，可以自己打patch
1. clone本仓库，然后`git checkout patch`。
2. 下载好@dcloudio/types的v3.x版本，内容直接粘贴在本仓库的目录里；或者，把本仓库下的promise.diff粘贴到下载好的@dcloudio/types文件夹里也可以。
3. 在@dcloudio/types所在的文件夹下，执行`git apply promise.diff`。

### LICENSE
- 本仓库patch分支中的内容以MIT License授权。  
  Copyright (c) 2022 Starrah  
  See full license text at https://choosealicense.com/licenses/mit/  
- 本仓库中来自上游@dcloudio/types的部分，由dcloudio授权
  - （截止本README写作日，package.json里声明的是Apache-2.0。实际使用前请自行再次检查！）