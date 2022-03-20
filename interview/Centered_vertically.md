## 关于水平居中
+ margin:auto  text-align:center

## 关于垂直居中
* 设定行高：(行内元素)
* 添加微元素：(::before ,::after)
* calc 动态计算 calc(50%-(自身高度)/2)
* 使用表格或假装表格
* transform(感觉和calc差不多)
* 绝对定位,用margin:auto属性(其父元素的position必须要指定为relative)
* flex布局

## 伪元素和伪类的区别

## 替换元素的概念以及计算规则
通过修改某个属性值呈现的内容就可以被替换的元素就称为“替换元素”。

## 对 CSSSprites 的理解

## 多行文本溢出省略
  overflow: hidden;            // 溢出隐藏
  text-overflow: ellipsis;     // 溢出用省略号显示
  display:-webkit-box;         // 作为弹性伸缩盒子模型显示。
  -webkit-box-orient:vertical; // 设置伸缩盒子的子元素排列方式：从上到下垂直排列
  -webkit-line-clamp:3;        // 显示的行数
  即将单行文本省略中的 white-space: nowrap;  替换为需求的行数

## 媒体查询的理解
针对不同的媒体类型定义不同的样式
@media (max-width: 600px) { 
  .facet_sidebar { 
    display: none; 
  } 
}

## css工程化（css module）
通过加一个特殊变量使得所有的class唯一，不会造成样式污染

## z-index属性在什么情况下会失效
+ 父元素position为relative时，子元素的z-index失效。解决：父元素position改为absolute或static；
+ 元素没有设置position属性为非static属性。解决：设置该元素的position属性为relative，absolute或是fixed中的一种；
+ 元素在设置z-index的同时还设置了float浮动。解决：float去除，改为display：inline-block；

## 为什么要清除浮动，清除浮动的方式
+ 父元素的高度无法被撑开，影响与父元素同级的元素
+ 与浮动元素同级的非浮动元素会跟随其后
+ 若浮动的元素不是第一个元素，则该元素之前的元素也要浮动，否则会影响页面的显示结构
