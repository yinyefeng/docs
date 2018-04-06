# 支付插件概述

本插件可实现在线支付。应用于买家购买商品时，为商家提供各种支付方式供买家选择，买家可以任选一种方式进行在线支付。

### 1、支付插件使用 

支付插件的模板标签是
```
<stl:payment></stl:payment>
```

将该标签插入商品页面的模板中调用支付插件，实现在线支付功能


```
<stl:payment fee="{content.ReadingCost}" productName="{content.title}" class="mes_a fright">付费阅读</stl:payment>
```



其中，`fee="{content.ReadingCost}"`是本商品的价格（ReadingCost是商品价格的字段名），

`productName="{content.title}"`是本商品的商品名（title是商品名称的字段名）。

![](/assets/QQ图片20180131190206.png) 

商品价格和商品名称是在内容管理中进行填写录入的：

![](/assets/QQ图片20180131190246.png) 

####**前台表现**

在线支付功能在网站前台页面的展示效果及应用流程如下图：

![](/assets/QQ图片20180131190320.jpg) 

买家点击“付费阅读”，弹出支付方式：

![](/assets/QQ图片20180131190407.png) 

选择某一支付方式进行支付（例如：选支付宝）：

![](/assets/QQ图片20180131190439.png) 

扫码或通过账户登陆进行支付！

