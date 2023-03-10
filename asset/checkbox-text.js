(function(w){

    var QsCheckBoxText = function(el){
        this.el = el;
        this._init();
    };

    QsCheckBoxText.prototype = {
        _init: function(){
            this.input = document.createElement('input');
            this.input.type = 'hidden';
            this.input.name = this.el.getAttribute('name');
            this.input.value = this.el.getAttribute('value');

            this.el.appendChild(this.input);

            this._createDom();
        },
        _createDom: function(){
            var self = this;

            this.option = JSON.parse(this.el.getAttribute('option'));

            var value = JSON.parse(this.input.value || '[]');


            this.option.forEach(function(element){
                var currentVal = value.find(function(val){
                    return val.key === element.key;
                })

                var container = self._createItem(element, currentVal);
                self.el.appendChild(container);
            });
        },
        _createItem: function(element, value){
            var self = this;

            var container = document.createElement('div');
            container.className = "qs-checkbox-text-container";
            this.el.appendChild(container);

            var box = document.createElement('div');
            box.className = "qs-checkbox-text-box";
            container.appendChild(box);

            var checkboxDiv = document.createElement('div');

            checkboxDiv.className = 'qs-checkbox-text-div';
            if(value && value.checked){
                checkboxDiv.className = "qs-checkbox-text-div checked";
            }
            box.appendChild(checkboxDiv);

            var label = document.createElement('span');
            label.className = 'qs-checkbox-text-label';
            label.innerText = element.title;

            box.appendChild(label);

            var input;
            if(element.need_text){
                input = document.createElement('input');
                input.type = 'text';
                input.className = 'qs-checkbox-text-input';
                if(value && value.checked){
                    input.className = "qs-checkbox-text-input checked";
                }
                if(value && value.text){
                    input.value = value.text;
                }
                container.appendChild(input);

                input.addEventListener('change', function(e){
                    self._dump(element.key, true, e.target.value);
                })
            }

            box.addEventListener('click', function(ev){
                var classList = self._toArray(checkboxDiv.classList);

                if(classList.indexOf('checked') > -1){
                    checkboxDiv.className = 'qs-checkbox-text-div';
                    if(element.need_text){
                        input.className = 'qs-checkbox-text-input';
                    }

                    self._dump(element.key, false);
                }else{
                    checkboxDiv.className = 'qs-checkbox-text-div checked';
                    if(element.need_text){
                        input.className = 'qs-checkbox-text-input checked';
                        self._dump(element.key, true, input.value);
                    }
                    else{
                        self._dump(element.key, true);
                    }

                }
            });

            return container;
        },
        _dump: function(key, checked, text){
            var originVal = JSON.parse(this.input.value || '[]');
            var updated = false;
            originVal.forEach(function(element){
                if(element.key == key){
                    element['checked'] = checked;
                    if(checked && !!text){
                        element['text'] = text;
                    }
                    updated = true;
                }
            });

            if(updated === false){
                var newVal = {};
                newVal['key'] = key;

                newVal['checked'] = checked;

                if(checked && !!text){
                    newVal['text'] = text;
                }

                originVal.push(newVal);
            }

            originVal = originVal.filter(function(element){
                return element.checked;
            });

            if(originVal.length > 0){
                this.input.value = JSON.stringify(originVal);
            }
            else{
                this.input.value = '';
            }

        },
        _toArray: function(classList){
            var arr = [];
            for(var i = 0; i < classList.length; i++){
                arr.push(classList[i]);
            }
            return arr;
        }
    }

    w.QsCheckBoxText = QsCheckBoxText;

}(window));