修改web.config文件中 requestValidationMode 属性值。

```
<configuration> 
     <system.web>  
        <httpRuntime requestValidationMode="2.0" ****** />  
     </system.web> 
</configuration>
```