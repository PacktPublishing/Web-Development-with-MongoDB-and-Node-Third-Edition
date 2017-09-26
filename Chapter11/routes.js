let phonebook = require('./phonebook');
//console.log("phoneList", phoneList);
module.exports = [{
    method: 'GET',
    path: '/phone/list',
    config: {
        handler(request, reply){
            console.log("get handler gets called");
            reply({
                message : "phonebook of superheroes",
                data  : phonebook.list
            });
        }
    }
}, {
    method: 'POST',
    path: '/phone/add',
    config: {
        handler(request, reply){
            //console.log("request", request);
            let payload = request.payload;
            phonebook.list.unshift(payload);
        	reply({
                message : "Added successfully",
                data : phonebook.list
            });
        }
    }
}, {
    method: 'PUT',
    path: '/phone/{phno}',
    config: {
        handler(request, reply){
            let payload = request.payload;
            let phno    = request.params.phno; 
            
            var notFound = [];
            for (let i = phonebook.list.length - 1; i >= 0; i--) {
                if(phonebook.list[i].phone_no == phno){

                    phonebook.list[i].name = payload.name;
                    reply(phonebook.list);
                    return;        
                }else{
                    notFound.push(i); 
                }
            }

            if(notFound.length == phonebook.list.length){
                reply('not Found');
                return;            
            }
            
        }
    }
}, {
    method: 'DELETE',
    path: '/phone/{phno}',
    config: {
        handler(request, reply){

            let phno    = request.params.phno; 
            
            var notFound = [];
            for (let i = phonebook.list.length - 1; i >= 0; i--) {
                
                if(phonebook.list[i].phone_no == phno){

                    phonebook.list.splice(i, 1);
                    reply({
                        message : "Delete successfully",
                        data :phonebook.list
                    });
                    return;        
                }else{
                    notFound.push(i); 
                }
            }

            if(notFound.length == phonebook.list.length){
                reply('not Found');
                return;            
            }
        }
    }
}];
