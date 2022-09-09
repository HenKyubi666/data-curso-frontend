(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8866)}])},8866:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var i=n(5893);n(2484),n(3924),n(8680);var s=n(4111),r=n(1438),a=n(2951),c=n(8029),o=n(460),u=n(7294),l=n(7568),d=n(655),h=n(9669),f=n.n(h),$=function(){function e(){(0,r.Z)(this,e),this.baseURL="postgres://ntlgldhciwcgvc:f314444384b8d2ac8338570f1c72a26f41921841582218183e04f0c23ff462ff@ec2-44-207-253-50.compute-1.amazonaws.com:5432/df07insph786lt/api/usuarios"}var t=e.prototype;return t.getAllUser=function(){var e=this;return(0,l.Z)(function(){return(0,d.__generator)(this,function(t){switch(t.label){case 0:return[4,f().get(e.baseURL).then(function(e){return e.data.data})];case 1:return[2,t.sent()]}})})()},t.saveUser=function(e){var t=this;return(0,l.Z)(function(){var n;return(0,d.__generator)(this,function(i){switch(i.label){case 0:return n={},[4,f().post(t.baseURL,(n.data=e,n)).then(function(e){return e.data})];case 1:return[2,i.sent()]}})})()},t.deleteUser=function(e){var t=this;return(0,l.Z)(function(){return(0,d.__generator)(this,function(n){switch(n.label){case 0:return[4,f().delete("".concat(t.baseURL,"/").concat(e)).then(function(e){return e.data})];case 1:return[2,n.sent()]}})})()},t.updateUser=function(e,t){var n=this;return(0,l.Z)(function(){var i;return(0,d.__generator)(this,function(s){switch(s.label){case 0:return i={},[4,f().put("".concat(n.baseURL,"/").concat(e),(i.data=t,i)).then(function(e){return e.data})];case 1:return[2,s.sent()]}})})()},e}(),m=n(2896),v=n(8650),b=n(3964),p=n(619),x=n(3861),g=n(5600),j=n(9403),y=n(2362),w=function(e){(0,c.Z)(n,e);var t=(0,o.Z)(n);function n(){var e;return(0,r.Z)(this,n),(e=t.call(this)).state={users:[],visible:!1,visible2:!1,user:{},selectedUser:{}},e.items=[{label:"Create",icon:"pi pi-fw pi-plus",command:function(){e.showSaveDialog()}},{label:"Edit",icon:"pi pi-fw pi-pencil",command:function(){e.showEditDialog()}},{label:"Delete",icon:"pi pi-fw pi-trash",command:function(){e.delete()}},],e.userService=new $,e.save=e.save.bind((0,s.Z)(e)),e.delete=e.delete.bind((0,s.Z)(e)),e.update=e.update.bind((0,s.Z)(e)),e.footer=(0,i.jsx)("div",{children:(0,i.jsx)(j.z,{label:"Guardar",icon:"pi pi-check",onClick:e.save})}),e.footer2=(0,i.jsx)("div",{children:(0,i.jsx)(j.z,{label:"Guardar",icon:"pi pi-check",onClick:e.update})}),e}return(0,a.Z)(n,[{key:"componentDidMount",value:function(){var e=this;this.userService.getAllUser().then(function(t){e.setState({users:t.map(function(e){var t=e.id,n=e.attributes;return n.id=t,n})})})}},{key:"save",value:function(){var e=this;this.userService.saveUser(this.state.user).then(function(){e.setState({visible:!1,user:{}}),e.toast.show({severity:"success",summary:"Attention",detail:"The register has been saved"}),e.userService.getAllUser().then(function(t){return e.setState({users:t.map(function(e){var t=e.id,n=e.attributes;return n.id=t,n})})})}).catch(function(t){return e.toast.show({severity:"error",summary:"Error",detail:"".concat(t)})})}},{key:"update",value:function(){var e=this;this.userService.updateUser(this.state.selectedUser.id,this.state.user).then(function(){e.setState({visible2:!1,user:{},selectedUser:{}}),e.toast.show({severity:"success",summary:"Attention",detail:"The register has been saved"}),e.userService.getAllUser().then(function(t){return e.setState({users:t.map(function(e){var t=e.id,n=e.attributes;return n.id=t,n})})})}).catch(function(t){return e.toast.show({severity:"error",summary:"Error",detail:"".concat(t)})})}},{key:"delete",value:function(){var e=this;this.state.selectedUser.id?window.confirm("Do you really want to delete the record")&&this.userService.deleteUser(this.state.selectedUser.id).then(function(){e.toast.show({severity:"success",summary:"Attention!",detail:"Register has been deleted"}),e.userService.getAllUser().then(function(t){return e.setState({users:t.map(function(e){var t=e.id,n=e.attributes;return n.id=t,n})})})}).catch(function(t){e.toast.show({severity:"error",summary:"Error!",detail:"".concat(t)})}):alert("Seleccione un registro a eliminar")}},{key:"showSaveDialog",value:function(){this.setState({visible:!0,user:{},selectedUser:{}})}},{key:"showEditDialog",value:function(){this.state.selectedUser.id?this.setState({visible2:!0,user:{id:this.state.selectedUser.id,nombre:this.state.selectedUser.nombre,fecha_de_nacimiento:this.state.selectedUser.fecha_de_nacimiento,numero_de_identificacion:this.state.selectedUser.numero_de_identificacion}}):alert("Seleccione un usuario para modificar")}},{key:"render",value:function(){var e=this;return(0,i.jsxs)("div",{style:{width:"80%",margin:"0 auto",marginTop:"20px"},children:[(0,i.jsx)(p.n,{model:this.items}),(0,i.jsx)("br",{}),(0,i.jsx)(b.s,{header:"Users CRUD",children:(0,i.jsxs)(m.w,{value:this.state.users,paginator:!0,rows:6,selectionMode:"single",selection:this.state.selectedUser,onSelectionChange:function(t){e.setState({selectedUser:t.value})},children:[(0,i.jsx)(v.s,{field:"nombre",header:"Nombre"}),(0,i.jsx)(v.s,{field:"fecha_de_nacimiento",header:"Fecha de nacimiento"}),(0,i.jsx)(v.s,{field:"numero_de_identificacion",header:"Numero de identificaci\xf3n"})]})}),(0,i.jsx)(x.V,{header:"Edit user",visible:this.state.visible2,style:{width:"400px"},footer:this.footer2,modal:!0,onHide:function(){return e.setState({visible2:!1})},children:(0,i.jsxs)("form",{id:"user-form",children:[(0,i.jsxs)("span",{className:"p-float-label",style:{marginTop:20},children:[(0,i.jsx)(g.o,{type:"text",value:this.state.user.nombre,style:{width:"100%"},id:"nombre2",onChange:function(t){var n=t.target.value;e.setState(function(e){var t=Object.assign({},e.user);return t.nombre=n,{user:t}})}}),(0,i.jsx)("label",{htmlFor:"nombre2",children:"Nombre"})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("span",{className:"p-float-label",children:[(0,i.jsx)(g.o,{type:"date",placeholder:"",value:this.state.user.fecha_de_nacimiento,style:{width:"100%"},id:"fecha_de_nacimiento2",onChange:function(t){var n=t.target.value;e.setState(function(e){var t=Object.assign({},e.user);return t.fecha_de_nacimiento=n,{user:t}})}}),(0,i.jsx)("label",{htmlFor:"fecha_de_nacimiento2",children:"Fecha de nacimiento"})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("span",{className:"p-float-label",children:[(0,i.jsx)(g.o,{type:"number",value:this.state.user.numero_de_identificacion,style:{width:"100%"},id:"numero_de_identificacion2",onChange:function(t){var n=t.target.value;e.setState(function(e){var t=Object.assign({},e.user);return t.numero_de_identificacion=n,{user:t}})}}),(0,i.jsx)("label",{htmlFor:"numero_de_identificacion2",children:"N\xfamero de identificaci\xf3n"})]})]})}),(0,i.jsx)(x.V,{header:"Create user",visible:this.state.visible,style:{width:"400px"},footer:this.footer,modal:!0,onHide:function(){return e.setState({visible:!1})},children:(0,i.jsxs)("form",{id:"user-form",children:[(0,i.jsxs)("span",{className:"p-float-label",style:{marginTop:20},children:[(0,i.jsx)(g.o,{type:"text",value:this.state.user.nombre,style:{width:"100%"},id:"nombre",onChange:function(t){var n=t.target.value;e.setState(function(e){var t=Object.assign({},e.user);return t.nombre=n,{user:t}})}}),(0,i.jsx)("label",{htmlFor:"nombre",children:"Nombre"})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("span",{className:"p-float-label",children:[(0,i.jsx)(g.o,{type:"date",placeholder:"",value:this.state.user.fecha_de_nacimiento,style:{width:"100%"},id:"fecha_de_nacimiento",onChange:function(t){var n=t.target.value;e.setState(function(e){var t=Object.assign({},e.user);return t.fecha_de_nacimiento=n,{user:t}})}}),(0,i.jsx)("label",{htmlFor:"fecha_de_nacimiento",children:"Fecha de nacimiento"})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("span",{className:"p-float-label",children:[(0,i.jsx)(g.o,{type:"number",value:this.state.user.numero_de_identificacion,style:{width:"100%"},id:"numero_de_identificacion",onChange:function(t){var n=t.target.value;e.setState(function(e){var t=Object.assign({},e.user);return t.numero_de_identificacion=n,{user:t}})}}),(0,i.jsx)("label",{htmlFor:"numero_de_identificacion",children:"N\xfamero de identificaci\xf3n"})]})]})}),(0,i.jsx)(y.F,{ref:function(t){return e.toast=t}})]})}}]),n}(u.Component),_=function(){return(0,i.jsx)("div",{style:{height:"95vh"},className:"flex justify-center items-center",children:(0,i.jsx)(w,{})})}}},function(e){e.O(0,[205,257,635,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);