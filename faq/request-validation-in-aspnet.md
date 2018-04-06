当asp.net提交<>这些字符到aspx页面时，如果未设置validaterequest="false"，就会出现错误：从客户端中检测到有潜在危险的Request.Form 值。

**解决方法：**

修改web.config文件中 requestValidationMode 和 validateRequest 两个属性值。

```
<configuration> 
   <system.web> 
       <httpRuntime requestValidationMode="2.0" ****** />
       <pages validateRequest="false"  ****** />
   </system.web> 
</configuration>
```