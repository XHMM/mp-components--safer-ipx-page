## mp-components--safer-ipx-page
这是一个微信小程序自定义组件。  
使用场景：想要避免页面内容和iphone x的底部黑线重叠

### Usage
1. `yarn add mp-components--safer-ipx-page`
2. `app.json`: 
    ```json
    {
      "usingComponents": {
        "safer-ipx-page": "mp-components--safer-ipx-page"
      }
    }
    ```
3. 你的页面.wxml：
      ```html
      <safer-ipx-page safer-ipx-page-class="my-page" pageHeight="300px">
        原先page组件下的内容写在这里面
      </safer-ipx-page>
      ```
4. 开发工具内 `工具` --> `构建npm`

### Properties
以下是该组件接受的参数
1. [optional] `safer-ipx-page-class`(string)：原本给page组件的class现写给该属性
2. [optional] `pageHeight`(string)：设置该组件的高度值(默认是100vh)。可传入合法的css高度值，比如'100px'，也可传入css变量，也可以是calc()

### Warning
1. 当你的页面使用了`fixed`+`bottom`布局时，请将其改为`absolute`+`bottom`形式，因为fixed布局是相对于原页面布局的，会使该组件失效