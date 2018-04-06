# STL 语言

### 定义

STL 语言全称称为 SiteServer 模版语言（SiteServer Template Language），是一种您可以用来创建显示模版的服务器端语言。

STL 语言由百容千域创建，用来克服 HTML 语言的局限。和 HTML 语言一样，STL 语言也是一种标准通用标记语言（SGML），采用与HTML 语言一致的语法和规则。STL 通过标记符号（元素及实体）来标记要调取并显示的各种网站数据及功能，通过SiteServer 解析引擎将对应标记转换为HTML 语言并在服务器中生成对应的静态页面文件。

### 语言特色

SiteServer 模版语言制作并不复杂，但功能强大，其主要特点如下：

1、 简易性：STL 语言版本升级采用超集方式，从而更加灵活方便。

2 、可扩展性： STL 语言的广泛应用带来了加强功能，增加标识符等要求，STL 语言采取子类元素的方式，为系统扩展带来保证。

3 、易学性：和HTML 语言规则保持一致确保了STL 语言易于学习，便于使用。

### 书写方式

STL 语言其实是文本，它需要SiteServer 软件进行解析，它的编辑方式可以分为三种：

1、 基本文本、文档编辑软件：使用微软自带的记事本或写字板即可编写，当然，通常采用Dreamweaver等HTML编辑软件进行编辑。

2 、SiteServer 软件的模板编辑器：SiteServer 软件中集成了STL 模板编辑器，能够显示行数、高亮、颜色标示以及对格式化代码等功能。

3 、所见即所得模板插件：这是我们推荐的方式，同时也是使用最广的方式，可以在无需记住STL 语言细节的情况下以最快速便捷的方式编写STL 语言，我们根据用户的习惯提供两款模板插件，包括Dreamweaver 模板插件以及Sublime Text 模板插件。采用模板插件方式，开发速度更快，效率更高，且直观的表现更强。

### STL 标签与 STL 实体

有两个通用术语用来描述 STL 语言的组成部分：STL标签 和 STL实体。

STL 标签的作用是在模板页面中插入各种标签，如栏目属性（<stl:channel>）、内容列表（<stl:contents>）等，STL 实体的作用是在HTML 标签或STL 标签的属性中插入信息。

STL 标签是左尖括号（<）和右尖括号（>）以及位于二者之间的所有内容。有开始标记（例如 <stl:a>）和结束标记（例如 </stl:a>）。STL 标签与HTML 标签的区别在于所有标记都以stl:作为名称空间开头。

STL 实体是左大括号（{）和右大括号（}）以及位于二者之间的所有内容。有开始标记和结束标记（例如 {Stl.SiteName}）

STL 实体能够嵌入到HTML 语言或STL 语言的任何位置，（例如内容模版中 <stl:a title="{Content.Title}"></stl:a>）

STL 标签示例：<stl:a channelName="栏目名称"><stl:channel type="Title"></stl:channel></stl:a>

STL 实体示例：{Stl.SiteName}

### STL 模板语言规则

一、STL 语言不区分大小写
STL 语言是不区分大小写的。和 HTML 语言一样，<stl:a> 和 <STL:A> 是相同的。

二、属性必须有用引号括起的值
属性是一个STL 元素的开始标记中的名称-值对。STL 文档中的属性有两个规则：

1、属性必须有值。

2、那些值必须用引号括起。

比较下面的两个示例。顶部的标记在 HTML 中是合乎规则的，但在 STL 中则不是。为了在 STL 中取得相同结果，您必须给属性赋值，而且必须把值括在引号中。

不合乎规则的 STL 元素：

<stl:content type></stl:content>

合乎规则的 STL 元素：

<stl:content type="Title"></stl:content>

您可以使用单引号，也可以使用双引号，但要始终保持一致。

如果属性值包含单引号或双引号，则您可以使用另一种引号来括起该值（如 name="Doug's car"），或使用 &quot; 代表双引号，使用 &apos; 代表单引号。

三、结束标记可以省略
与HTML 一样，STL 可以省去任何结束标记。例如<stl:a></stl:a>与<stl:a />是一致的。

### STL 实体说明

实体说明
STL 实体是左大括号（{）和右大括号（}）以及位于二者之间的所有内容。有开始标记和结束标记（例如 {Stl.SiteName}）。

STL 实体能够嵌入到HTML 语言或STL 语言的任何位置，（例如内容模版中 <stl:a title="{Content.Title}"></stl:a>）。

STL 其余实体分为通用实体（{Stl.开头）、内容实体（{Content.开头）、栏目实体（{Channel.开头）、评论实体（{Comment.开头）以及数据库实体（{Sql.开头）。

通用实体与<stl:value>元素相同，<stl:value type="xyz"></stl:value>等价于{Stl.xyz}，请参考<stl:value> 标签。通用实体能在任何地方解析。

内容实体与<stl:content>元素相同，<stl:content type="xyz"></stl:content>等价于{Content.xyz}，请参考<stl:content> 标签。内容实体只能在内容模板中或<stl:contents> 元素内部解析。

栏目实体与<stl:channel>元素相同，<stl:channel type="xyz"></stl:channel>等价于{Channel.xyz}，请参考<stl:channel> 标签。栏目实体能在任何地方解析。

评论实体与<stl:comment>元素相同，<stl:comment type="xyz"></stl:comment>等价于{Comment.xyz}，请参考<stl:comment> 标签。评论实体只能在评论上下文中解析。

数据库实体与<stl:sqlContent>元素相同，<stl:sqlContent type="xyz"></stl:sqlContent>等价于{Sql.xyz}，请参考<stl:sqlContent> 标签。数据库实体只能在数据库查询上下文中解析。

标签与实体
所有STL 元素均有对应实体，将元素“<”替换为“{”，“>”替换为“}”即为对应实体，实体中属性采用单引号或者不带引号。如内容值元素：

<stl:content type="Title" wordNum="20"></stl:content>

对应实体为

{stl:content type='Title' wordNum='20'}

或

{stl:content type=Title wordNum=20}

### STL 翻页标签与实现

组成
翻页标签 由 <stl:pageChannels>、<stl:pageContents> 等翻页列表标签以及<stl:pageItems>、<stl:pageItem>等翻页项标签组成。

翻页列表元素<stl:pageChannels>与<stl:pageContents>的作用是显示翻页的列表项，翻页项元素<stl:pageItems>、<stl:pageItem>的作用是显示翻页按钮，如下一页、下一页等。

应用范围
翻页标签可以放到任何类型的模板中使用，唯一的例外是如果在单页模板中使用，需包含在<stl:dynamic>标签中。

### STL 地址通配符

地址通配符
在 STL 语言中，地址使用通配符（“~”）和（“@”）来进行存储和读取，您可以使用通配符（“~”）来表示应用程序的根目录，使用通配符（“@”）来表示当前站点的域名地址，而不需要将地址硬编码为文件相对 URL。

示例
例如，您可以使用“~/Default.aspx”表示系统根目录下的 Default.aspx 页，使用“@/index.html”表示站点根目录下的 index.html页。