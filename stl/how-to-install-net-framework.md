# 安装.Net Framework（以Win7 为例）

> Microsoft .NET Framework是用于Windows的新托管代码编程模型。它将强大的功能与新技术结合起来，用于构建具有视觉上引人注目的用户体验的应用程序，实现跨技术边界的无缝通信，并且能支持各种业务流程。

1、下载.Net Framework4.6.2安装包：

微软官方下载地址为：
https://www.microsoft.com/zh-cn/download/details.aspx?id=53344
点击此地址即可下载Net Framework4.6.2安装包。

![](/assets/264.jpg)

2、双击下载下来的安装包，出现如图所示界面：

![](/assets/265.jpeg)

然后选择“我已阅读并接受许可条款后，点击“安装”，出现如下界面：

![](/assets/266.jpeg)

直至出现如下界面，表示完成安装：

![](/assets/267.jpeg)

3、重启机器

在上一步单击“完成”后，有些电脑会出现下图提示：

![](/assets/268.jpeg)

选择“立即重新启动”。如果没有出现上一步骤中的提示，那么就无需重启。

4、检查是否安装成功

打开【资源管理器】，在地址栏输入： 
` C:\Windows\Microsoft.NET\Framework `

![](/assets/269.jpeg)

在文件夹下可以看到多个文件夹，最高版本号就是当前Net Framework版本，如下图所示：

![](/assets/270.jpeg)

注意：只要是V4.0出现了，表示安装成功了。

5、IIS和.NET Framework安装顺序问题

如果是先安装IIS，再安装.NET Framework，系统可以正常解析.aspx页面。
但是，如果是先安装了.NET Framework，再安装IIS，则会由于相关的IIS组件没有得到.NET的更新，而导致无法正常解析.aspx页面。

解决办法如下：

点击“开始”按钮，看到下面有个文本输入框:

![](/assets/271.jpeg)

在文本输入框中输入：
` CMD `
再回车，则出现：

![](/assets/272.jpeg)

在上图命令行窗口中输入： 
`    cd C:\Windows\Microsoft.NET\Framework\v4.0.30319 `  
回车，再输入： 
`    aspnet_regiis -i `  
显示ASP.NET<4.0.30319>安装完毕。 系统又可以正常解析.aspx页面了。