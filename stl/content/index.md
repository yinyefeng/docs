# stl:content 获取内容值


### 定义

通过 stl:content 标签在模板中显示指定内容的属性值

### 属性

属性  | 说明
------  | ------
type | 显示的类型
leftText | 显示在信息前的文字
rightText | 显示在信息后的文字
formatString | 显示的格式
no | 显示第几项
separator | 显示多项时的分割字符串
startIndex | 字符开始位置
length | 指定字符长度
wordNum | 显示字符的数目
ellipsis | 文字超出部分显示的文字
replace | 需要替换的文字，可以是正则表达式
to | 替换replace的文字信息
isClearTags | 是否清除HTML标签
isReturnToBr | 是否将回车替换为HTML换行标签
isLower | 是否转换为小写
isUpper | 是否转换为大写
isOriginal | 如果是引用内容，是否获取所引用内容的值