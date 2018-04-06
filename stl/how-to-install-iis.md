# 安装IIS（以Win7为例）

> IIS是Internet Information Services的缩写，意为互联网信息服务，是由微软公司提供的基于运行Microsoft Windows的互联网基本服务。最初是Windows NT版本的可选包，随后内置在Windows 2000、Windows XP Professional和Windows Server 2003一起发行，但在Windows XP Home版本上并没有IIS。IIS是一种Web（网页）服务组件，其中包括Web服务器、FTP服务器、NNTP服务器和SMTP服务器，分别用于网页浏览、文件传输、新闻服务和邮件发送等方面，它使得在网络（包括互联网和局域网）上发布信息成了一件很容易的事。


1、点击开始→控制面板，然后再点击程序，勿点击卸载程序，否则到不了目标系统界面。

![](/assets/254.jpeg)

2、然后在程序和功能下面，点击打开和关闭windows功能。

![](/assets/255.jpeg)

3、进入Windows功能窗口，然后看到internet信息服务选项，然后按照图中设置即可。

![](/assets/256.jpeg)

![](/assets/257.jpeg)

![](/assets/258.png)

注意：打√的选项下面为全选，方圈的下面按照图中打√的选择即可。

4、然后确定，会进入系统安装设置，此时可能需要等待两三分钟的样子。

![](/assets/259.jpeg)

5、再打开控制面板---系统和安全---管理工具。

![](/assets/260.png)

![](/assets/261.jpeg) 

![](/assets/262.jpeg)

如果看到以上图标，表示IIS安装成功了。

6、检验IIS是否能够正常工作

最简单的检测方法就是打开浏览器，输入：
` http://localhost ` 
或者 
` http://127.0.0.1 ` 
如果能显示以下图片则表示IIS已经正常工作了：

![](/assets/263.jpeg)