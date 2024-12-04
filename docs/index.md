# 快速开始

### 简介
工一云电脑是以极致用户体验和工程高性能3D著称的云电脑产品，用户可以随时随地随屏访问云电脑，可为校企提供高效、便捷、安全、流畅、可靠的高性能云电脑。   

工一云电脑系统是一套支持VDI、VOI、IDV、TCI等多云融合架构的云桌面系统，并同时支持C/S和B/S架构，并可支持VNC、SPICE、RDP、ICA、PCoIP和自研CEDP多种桌面协议。

工一云电脑APP和WEB版已经完全兼容电脑端和移动端，并可以支持Windows、HarmonyOS、MIUI/HyperOS、Andriod/ChromeOS、iOS/macOS、Linux等系统，但为了带给用户极致体验，工一云电脑采取了开放包容的理念，默认开启了VNC、SPICE、RDP通用桌面协议和CEDP自研桌面协议，使工一云电脑可兼容其他通用桌面APP，以下是工一推荐给用户的最佳连接方式。  

### 使用方法
工一云电脑主要包含APP、浏览器两种连接方式。   
1. 根据下表查找对应设备+系统的推荐连接方式；  
2. 选择其中一种推荐连接方式，具体步骤如下；  

:::tip 提示
常用：推荐APP；  
临时性：推荐浏览器；
:::

<!-- <div align="center">各设备推荐的连接方式表</div> -->
<figcaption>推荐连接方式表</figcaption>

|操作系统             |电脑          |平板      |手机|电视/投影|VR/AR/MR眼镜|零/瘦终端|
|--------------------|--------------|----------|----|-------|-------|-------|
|Windows             |APP, 浏览器    |APP, 浏览器|-  |-      |APP    |-     |
|HarmonyOS           |-              |APP, 浏览器|APP|APP    |-       |-     |
|MIUI/HyperOS        |-              |APP, 浏览器|APP|APP    |-       |-     |
|Andriod/ChromeOS    |APP, 浏览器     |APP, 浏览器|APP|APP    |APP     |-     |
|iOS/macOS           |APP, 浏览器     |APP, 浏览器|APP|-      |APP     |-     |
|Linux Desktop       |APP, 浏览器     |APP, 浏览器|-  |-      |-      |-     |
|Linux Server        |定制程序        |-         |-  |-      |-      |定制程序|
:::tip 提示
电脑：包含台式机、一体机、笔记本、微型电脑； 
:::


## 连接方式1: APP
专用APP使用的是工一自研CEDP桌面协议，使用场景更多样灵活，并且与系统深度集成，可根据需要灵活指定开发。通用APP使用的是通用的桌面协议例如RDP、VNC等，在移动端使用上体验更好。  

### 专用APP
Windows场景最为广泛和复杂，包含个人云电脑（PC）、个人端云两用云电脑(PLC)、共享公共云电脑(SSC)、共享私人云电脑(SPC)、共享端云两用云电脑(SLC)等版本。
虽然版本不同，但安装配置方式相似，以个人端云两用云电脑(PLC)为例：  

1. [下载APP](./download.md#专用APP下载)，安装APP；
2. 首次打开需要进行初始化设置:Ctrl+Alt+i:输入"https://xxx.cec.cc:662/"（'xxx.cec.cc'为服务器地址，根据实际替换），点击确定；
3. 选择"账号密码登录"或者"微信扫描登录".
<!-- :::warning 注意  
APP方式（Win10 21H2及以上）才支持本地电脑与云电脑的复制粘贴；   
::: -->

### 通用APP:  
1. [下载APP](./download.md#通用APP下载)，安装APP后打开应用，点击底部加号，选择“添加工作区”，输入`xxx.cec.cc:666`（'xxx.cec.cc'为服务器地址，根据实际替换），会自动搜索弹出工作区URL
2. 用户账户下拉选择“添加用户账户”，输入个人账号`13888888888`（'13888888888'替换为个人账号）和个人密码，最后点击保存；
3. 最后点击右上角的“下一步”，此时会显示所有的应用程序和云电脑；
3. 点击云电脑或应用会弹出一个连接选项框，点击“连接”；
4. 进入桌面或应用后，顶部会出现一个鼠标键盘选项，移动端的鼠标操作分触屏模式和鼠标模式，根据习惯选择对应的模式即可。




<!-- <div class="div1" style="display: flex;">
 <div>
  <video controls poster="https://cec-cc.oss-cn-shenzhen.aliyuncs.com/andriod.jpg" src="https://cec-cc.oss-cn-shenzhen.aliyuncs.com/andriod.mp4"></video>
 </div>
 <div>
  <video controls poster="https://cec-cc.oss-cn-shenzhen.aliyuncs.com/ios.jpg" src="https://cec-cc.oss-cn-shenzhen.aliyuncs.com/ios.mp4"></video>
 </div>
</div> -->

## 连接方式2: 浏览器
1. 浏览器只需输入`https://xxx.cec.cc:664`（'xxx.cec.cc'为服务器地址，根据实际替换），输入用户名和密码即可登录；  

:::warning 注意  
云电脑切换中英文：Shift快捷键。  
:::


## 连接方式3: 定制程序
适用于非桌面系统，一般为定制开发，普通用户无需关注。


