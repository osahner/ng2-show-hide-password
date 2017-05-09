# ngx-show-hide-password

## Add a show hide button to password input fields

Add split input button to password or text input. Toggles input type between "text" and "password". 

#### Requires 

* **Angular 4** `>=4.0.0`
* **Bootstrap 4** `v6`

#### Optional Icons

* [fontawesome](http://fontawesome.io/)
* [entypo](http://entypo.com/)

### Installation

```
$ npm install https://github.com/osahner/ngx-show-hide-password.git --save
```

### Example

```ts
// app.module.ts
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
...
@NgModule({
  ...
  imports: [
    ShowHidePasswordModule,
  ],
  ...
})
```

```html
<show-hide-password size="lg" icon="entypo">
  <input type="password" name=... />
</show-hide-password>
```

Password hidden | Password exposed
------------ | -------------
![Hidden password](docs/hidden.png) | ![Exposed password](docs/exposed.png)


### Attributes

* **size**: `sm`, `lg` or nothing
* **icon**: `fontawesome`, `entypo` or nothing (= checkbox)

### LICENCE

MIT
