# 系统复习markdown进阶语法
[TOC]
## 1.文字颜色，字体，大小，文字高亮
### 1.1 文字颜色
```md
<font color='tomato'>我是番茄颜色的</font>

<font color=#00c9a7>#00c9a7</font>

```

推荐几个好看的字色：
<font color=#00c9a7>#00c9a7</font>
<font color=#845ec2>#845ec2</font>
<font color=#f3c5ff>#f3c5ff</font>
<font color=#d65db1>#d65db1</font>
<font color=#ff6f91>#ff6f91</font>
<font color=#ffc75f>#ffc75f</font>
<font color=#ff9671>#ff9671</font>
<font color=#0089ba>#0089ba</font>

### 1.2 文字字体
```md
<font face="宋体">我是宋体</font>
<font face="隶书">我是隶书</font>
<font face="幼圆">我是幼圆</font>
<font face="黑体">我是黑体</font>

```
<font face="宋体">我是宋体</font>
<font face="隶书">我是隶书</font>
<font face="幼圆">我是幼圆</font>
<font face="黑体">我是黑体</font>

### 1.3 文字高亮
```md
我是==文字高亮==<a id = 'highlight'></a>
```

我是==文字高亮== <a id = 'highlight'></a>

### 1.4 文字字号
<font size = 1>我是1号最小字体</font>
<font size = 2>我是2号字体</font>
<font size = 3>我是3号字体</font>
<font size = 4>我是4号字体</font>
<font size = 5>我是5号字体</font>
<font size = 6>我是6号字体</font>
<font size = 7>我是7号最大字体</font>

## 2.转义字符
`\`用来显示特殊字符
```md
\# \* \[ ] \! \|
```

\# \* \[ ] \! \|

## 3. 表格
### 3.1 基础表格
```md
|表头1|表头2|表头3|表头4|
|------|------|-----|----|
|内容1|内容2|内容3|内容4|
|内容5|内容6|内容7|内容8|
```

|表头1|表头2|表头3|表头4|
|------|------|-----|----|
|内容1|内容2|内容3|内容4|
|内容5|内容6|内容7|内容8|

### 3.2 带有对齐方式表格
```md
|左对齐111111111|中间2222222|中间333333333|右对齐44444444444|
|------|:------:|:-----:|----:|
|内容1|内容2|内容3|内容4|
|内容5|内容6|内容7|内容8|
```

|左对齐1111111|中间2222222|中间333333333|右对齐4444444|
|------|:------:|:-----:|----:|
|内容1|内容2|内容3|内容4|
|内容5|内容6|内容7|内容8|

### 3.3 复杂表格
需要合并单元格，只能加上html语法
>-  `<tr>` 表格行标签，**定义表格中的一行**。 所有表格单元格都须放在 ` <tr>`  内
>
>-  `<td>` 包含表格**实际内容**。
>
>- ` <th>` ：表格**表头**单元格标签，用于定义表格表头单元格，通常**文本加粗居中**显示。

![alt text](https://img2023.cnblogs.com/blog/3492455/202501/3492455-20250109004724009-186403171.png)
```md
<table border = '2'>
    <thead>
        <tr>
            <th colspan = '2'>需求：V0.3版本规划</th>
            <th>优先级</th>
            <th>任务分解</th>
            <th>产品负责人</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan = '3'>功能模块1</td>
            <td>事项1</td>
            <td>3</td>
            <td>任务1</td>
            <td rowspan = '3'>@李华</td>
        </tr>
        <tr>
            <td rowspan = '2'>事项2</td>        
            <td>4</td>        
            <td>任务2</td>        
        </tr>
        <tr>
            <td>2</td>        
            <td>任务4</td>             
        </tr>
        <tr>
            <td rowspan = '6'>功能模块2</td>
            <td>事项1</td>
            <td>2</td>
            <td>任务3</td>
            <td rowspan = '6'>@小花</td>
        </tr>
        <tr>
            <td>
                事项2
            </td>
            <td>
                1
            </td>
            <td>
                任务2
            </td>
        </tr>
        <tr>
            <td rowspan = '4'>
                事项3
            </td>
            <td>
                1
            </td>
            <td>
                任务2
            </td>
        </tr>
        <tr>
            <td>
                2
            </td>
            <td>
                任务2
            </td>
        </tr>
        <tr>
            <td>
                4
            </td>
            <td>
                任务3
            </td>
        </tr>
        <tr>
            <td>
                3
            </td>
            <td>
                任务1
            </td>
        </tr>
    </tbody>
</table>

```

<table border = '2'>
    <thead>
        <tr>
            <th colspan = '2'>需求：V0.3版本规划</th>
            <th>优先级</th>
            <th>任务分解</th>
            <th>产品负责人</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan = '3'>功能模块1</td>
            <td>事项1</td>
            <td>3</td>
            <td>任务1</td>
            <td rowspan = '3'>@李华</td>
        </tr>
        <tr>
            <td rowspan = '2'>事项2</td>        
            <td>4</td>        
            <td>任务2</td>        
        </tr>
        <tr>
            <td>2</td>        
            <td>任务4</td>             
        </tr>
        <tr>
            <td rowspan = '6'>功能模块2</td>
            <td>事项1</td>
            <td>2</td>
            <td>任务3</td>
            <td rowspan = '6'>@小花</td>
        </tr>
        <tr>
            <td>
                事项2
            </td>
            <td>
                1
            </td>
            <td>
                任务2
            </td>
        </tr>
        <tr>
            <td rowspan = '4'>
                事项3
            </td>
            <td>
                1
            </td>
            <td>
                任务2
            </td>
        </tr>
        <tr>
            <td>
                2
            </td>
            <td>
                任务2
            </td>
        </tr>
        <tr>
            <td>
                4
            </td>
            <td>
                任务3
            </td>
        </tr>
        <tr>
            <td>
                3
            </td>
            <td>
                任务1
            </td>
        </tr>
    </tbody>
</table>

## 4.脚注
### 4.1 语法
```md
你可真背时[^1]
那我问你[^2]
[^1]:四川方言，通常讽刺一个人自作自受
[^2]:健身圈说科技会让头顶变得尖尖的，是因为阿诺头顶尖尖的真实例子而来
脚注显示在全文最下面
```
![alt text](https://img2023.cnblogs.com/blog/3492455/202501/3492455-20250109004724886-1338135811.png)

### 4.2 运用场景
> 为特定术语或概念提供解释
当文档中出现专业术语或概念时，可以使用脚注来提供简要的解释或定义，帮助读者更好地理解。
引用外部资源
在文档中引用外部资源（如网页、书籍、文章等）时，可以使用脚注来提供资源的链接或详细信息。
添加附加信息
脚注还可以用于提供与文档内容相关的附加信息，如作者信息、版权声明、图片来源等。

## 5.上下标
### 5.1 上标

```md
X^2^
X<sup>2</sup>
```
X^2^
X<sup>2</sup>

### 5.2下标
```md
H~2~O
H<sub>2</sub>O
Na + H~2~O === NaOH + H~2~O↑
```
H~2~O
H<sub>2</sub>O
Na + H~2~O === NaOH + H~2~O↑

## 6. Tolist

>`- [ ] `表示一个未完成的任务
>`- [x]` 表示一个已完成的任务（注意，x 应该在方括号内，并且前面有一个空格）

```md
- [x] 起床
- [ ] 学习
- [ ] 睡觉
```
- [x] 起床
- [ ] 学习
- [ ] 睡觉

## 7. 锚点
>在需要跳转到的位置，使用 HTML 标签`<a>`定义一个锚点，并为其设置一个唯一的id属性
>在需要引用锚点的地方，使用 Markdown 的链接语法，并在链接文本前加上`#`符号和锚点的 ID
```md
# Markdown 锚点应用案例

## 目录

- [1. 引言](#introduction)
- [2. 主要内容](#main-content)
  - [2.1 章节一](#chapter-one)
  - [2.2 章节二](#chapter-two)
- [3. 结论](#conclusion)

## 1. 引言<a id="introduction"></a>

在本文中，我们将探讨 Markdown 锚点的使用方法和应用场景。通过锚点，我们可以在文档内部创建链接，实现快速跳转和导航。

## 2. 主要内容

### 2.1 章节一<a id="chapter-one"></a>

本章节将详细介绍 Markdown 锚点的定义和引用方法，以及如何在文档中使用它们。

### 2.2 章节二<a id="chapter-two"></a>

在本章节中，我们将通过具体案例展示 Markdown 锚点的应用场景，包括创建文档目录、实现页面内部跳转等。

## 3. 结论<a id="conclusion"></a>

通过本文的介绍和案例展示，我们了解了 Markdown 锚点的使用方法和应用场景。锚点不仅提高了文档的可读性和互动性，还方便了我们快速导航和查找信息。
```
[文字高亮](#highlight)

## 8. 生成内容目录
>在 Markdown 文件的开头（通常是第一行或第二行，紧跟在标题之后）添加 [TOC]，解析器就会自动解析文件的标题并生成一个目录。