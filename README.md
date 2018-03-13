# ngx-show-hide-password

## Add a show hide button to password input fields

Add split input button to password or text input. Toggles input type between "text" and "password". 

[![Build Status](https://travis-ci.org/osahner/ngx-show-hide-password.svg?branch=master)](https://travis-ci.org/osahner/ngx-show-hide-password)

#### Requires 

* **Angular** `^5.0.5`
* **Bootstrap** `^4.0.0`

#### Optional Icons

* [fontawesome](http://fontawesome.io/)
* [entypo](http://entypo.com/)

### Installation

```
$ npm install ngx-show-hide-password --save
```

### Example

```ts
// app.module.ts
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
...
@NgModule({
  ...
  imports: [
    BrowserModule,
    FormsModule,
    ShowHidePasswordModule.forRoot(),
    ...
  ],
  ...
})
```

```html
<show-hide-password size="lg" icon="entypo">
  <input type="password" name=... >
</show-hide-password>
```

Password hidden | Password exposed
------------ | -------------
![Hidden password](resources/hidden.png) | ![Exposed password](resources/exposed.png)


### Attributes

* **size**: `sm`, `lg` or nothing
* **icon**: `fontawesome`, `entypo` or empty|nothing (= checkbox)

### Changelog

* v1.2.3 bootstrap 4.0.0 
* v1.2.2 update jquery ~> 3.0.0
* v1.2.1 requires Angular v5, for Angular v4 use `@1.1.0` instead
* v1.2.0 update components
* v1.1.0 initial release

### LICENCE

MIT
