```
yarn install
yarn add node-sass 
yarn remove node-sass
yarn add -D sass
yarn start
yarn build
```

```
.htaccess
<IfModule mod_rewrite.c>
RewriteEngine on
RewriteCond %{REQUEST_FILENAME} -s [OR]
RewriteCond %{REQUEST_FILENAME} -l [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^.*$ - [NC,L]
RewriteRule ^(.*) index.html [NC,L]
</IfModule>
```
