<?php
namespace BuilderItem\CheckboxText;

use Bootstrap\Provider;
use Bootstrap\RegisterContainer;
use BuilderItem\CheckboxText\FormType\CheckboxText\CheckboxText;
use FormItem\AliyunOss\FormType\PictureOss\PictureOss;

class CheckboxTextProvider implements Provider{

    public function register(){
        RegisterContainer::registerFormItem('checkbox_text', CheckboxText::class);
        RegisterContainer::registerListColumnType('checkbox_text', \BuilderItem\CheckboxText\ColumnType\CheckboxText\CheckboxText::class);

        RegisterContainer::registerSymLink(WWW_DIR . '/Public/checkbox-text', __DIR__ . '/../asset');
    }
}