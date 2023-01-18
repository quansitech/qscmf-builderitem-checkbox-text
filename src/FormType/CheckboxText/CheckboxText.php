<?php
namespace BuilderItem\CheckboxText\FormType\CheckboxText;

use Illuminate\Support\Str;
use Think\View;
use Qscmf\Builder\FormType\FormType;

class CheckboxText implements FormType {

     public function build(array $form_item) : string{
        $view = new View();
        $view->assign('form', $form_item);
        $view->assign('gid', Str::uuid()->getHex());
        $content = $view->fetch(__DIR__ . '/checkbox_text.html');
        return $content;
    }
}