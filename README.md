# qscmf-builderitem-checkbox-text

checkbox-text builder组件

#### 效果截图

![](https://github.com/quansitech/files/blob/master/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230118113942.png)

![](https://github.com/quansitech/files/blob/master/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230118114124.png)


#### 安装

```php
composer require quansitech/qscmf-builderitem-checkbox-text
```

#### 如何使用

+ FormType

  ```php
  // title: 选项标题
  // key: 选现对应的键值
  // need_text 是否需要填写额外的文本项
  $option = [
    [
        'title' => '网站开发',
        'key' => 1,
    ],
    [
        'title' => '公众号运维',
        'key' => 2,
    ],
    [
        'title' => '其他',
        'key' => 3,
        'need_text' => true,
    ]
  ];
  ->addFormItem("main_business", "checkbox_text", "主营业务", "", $option)
  
  //注意：组件会自动构造好json格式的数据提交，直接存入对应的数据库字段即可
  ```

+ ColumnType
    
  考虑展示内容可能会比较多，放listbuilder进行编辑并不优雅，暂时不支持editable模式

  ```php
    $option = [
        [
            'title' => '网站开发',
            'key' => 1,
        ],
        [
            'title' => '公众号运维',
            'key' => 2,
        ],
        [
            'title' => '其他',
            'key' => 3,
            'need_text' => true,
        ]
    ];
  ->addTableColumn("main_business", "主营业务", "checkbox_text", $option)
  ```


#### 前端单独使用checkbox-text.js

  用法参照asset/demo.html

  name属性会自动赋予input hidden组件，用于form提交数据时用

  option是组件展示配置，格式是json字符串，具体设置参照上面的$option说明

  value是组件的默认值，格式是json字符串，参照builder存入数据库的格式，一般直接配置后端读取即可

  class如果没有特殊的样式要求，可以使用qscmf-checkbox-text,否则可以自定义一个别的类名，但是需要自己写样式

