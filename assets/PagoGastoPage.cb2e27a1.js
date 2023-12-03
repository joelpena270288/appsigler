import{_ as k,o as Q,c as N,w as o,f as s,a as t,J as i,aw as l,af as p,M as f,N as c,e as u,ah as V,ax as P}from"./index.ef228992.js";import{Q as d}from"./QSpace.7f894e1d.js";import{b as _,Q as w,a as m,g as A}from"./QTable.54a77e6e.js";import{Q as v}from"./QInput.a2bee355.js";import{Q as C}from"./QCardActions.bed2bb53.js";import{Q as B}from"./QPage.2fc420a1.js";import{C as M}from"./ClosePopup.6197016b.js";import{api as g}from"./axios.23aa70c0.js";import{u as F}from"./use-quasar.38626e8f.js";import{a as b}from"./authenticate.bcdfbf4f.js";import{h as S}from"./moment.9709ab41.js";import"./format.6bd9982d.js";import"./use-key-composition.25c6204a.js";import"./QItemLabel.1cc16253.js";import"./js.cookie.f93afda9.js";F();const x={name:"PagoGastoPage",data(){return{productos:!1,items:[],gasto:{Nombre:"",NCF:"",factura:"",RNC:"",direccion:"",cuentaporpagar:{montoinicial:0,montorestante:0},proyecto:{name:"",cliente:{nombre:""},fecha_inicio:""}},columsitems:[{label:"Cantidad",name:"cantidad",required:!0,align:"center",field:e=>e.cantidad,format:e=>`${e}`,sortable:!0},{label:"Nombre",name:"descripcion",required:!0,align:"center",field:e=>e.descripcion,format:e=>`${e}`,sortable:!0},{label:"ITBIS",name:"importeimpuesto",required:!0,align:"center",field:e=>e.importeimpuesto,format:e=>`${e}`,sortable:!0},{label:"Importe",name:"importe",required:!0,align:"center",field:e=>e.importe,format:e=>`${e}`,sortable:!0},{label:"Subtotal",name:"valortotal",required:!0,align:"center",field:e=>e.valortotal,format:e=>`${e}`,sortable:!0}],columspagos:[{label:"Cuenta",name:"cuenta",required:!0,align:"center",field:e=>e.cuenta,format:e=>`${e}`,sortable:!0},{label:"Banco",name:"banco",required:!0,align:"center",field:e=>e.banco,format:e=>`${e}`,sortable:!0},{label:"Moneda",name:"moneda",required:!0,align:"center",field:e=>e.moneda,format:e=>`${e}`,sortable:!0},{label:"Monto",name:"monto",required:!0,align:"center",field:e=>e.monto,format:e=>`${e}`,sortable:!0},{label:"Fecha",name:"fecha",required:!0,align:"center",field:e=>e.create_At,format:e=>`${e}`,sortable:!0}],pago:{idpago:"",idcuenta:"",pago:0,numerocheque:""},pagos:[],cuentas:[],colum:[{label:"Cuenta",name:"cuenta.numerocuenta",required:!0,align:"center",field:e=>e.cuenta.numerocuenta,format:e=>`${e}`,sortable:!0},{label:"Banco",name:"cuenta.banco",required:!0,align:"center",field:e=>e.cuenta.banco,format:e=>`${e}`,sortable:!0},{label:"Moneda",name:"cuenta.moneda.valor",required:!0,align:"center",field:e=>e.cuenta.moneda.valor,format:e=>`${e}`,sortable:!0},{label:"Monto",name:"pago",required:!0,align:"center",field:e=>e.pago,format:e=>`${e}`,sortable:!0},{label:"No. Cheque",name:"numerocheque",required:!0,align:"center",field:e=>e.numerocheque,format:e=>`${e}`,sortable:!0},{label:"Fecha",name:"createdAt",required:!0,align:"center",field:e=>e.createdAt,format:e=>`${e}`,sortable:!0}]}},components:{},methods:{formatFecha(e){return S(e).format("DD/MM/YYYY")},async loadGastos(){await g.get("/gastos-empresas/"+this.$route.params.idgasto,{headers:{Authorization:`Bearer ${b.getUserLogged()}`}}).then(e=>{this.items=e.data.gastosItems,this.gasto=e.data,this.pagos=e.data.pagos}).catch(e=>this.$q.notify({type:"negative",position:"top",message:e.response.data.message}))},async AddPago(){await g.post("/pago-gasto/",{idcuenta:this.pago.idcuenta,idpago:this.$route.params.idpago,pago:this.pago.pago,numerocheque:this.pago.numerocheque},{headers:{Authorization:`Bearer ${b.getUserLogged()}`}}).then(e=>{this.factura=e.data,this.rows=e.data.pagos,this.$q.notify({color:"positive",position:"top",message:"Se inserto el pago ",icon:"done"})}).catch(e=>this.$q.notify({type:"negative",position:"top",message:e.response.data.message})),this.loadGastos(),this.pago.pago=0,this.pago.numerocheque=""},async loadCuentas(){await g.get("/cuentas-empresa/",{headers:{Authorization:`Bearer ${b.getUserLogged()}`}}).then(e=>{this.cuentas=e.data}).catch(e=>this.$q.notify({type:"negative",position:"top",message:e.response.data.message}))}},mounted(){this.loadGastos(),this.loadCuentas()}},z={class:"q-pa-md flat bordered"},I=s("div",{class:"text-h5 q-mt-sm q-mb-xs"},"Adicionar Pago ",-1);function U(e,n,D,G,r,h){return Q(),N(B,{class:"q-pa-md"},{default:o(()=>[s("div",z,[t(c,{class:"my-card"},{default:o(()=>[t(i,null,{default:o(()=>{var a,y,q;return[s("p",null," Nombre Proyecto: "+l((a=r.gasto.proyecto)==null?void 0:a.name),1),s("p",null," Cliente: "+l((y=r.gasto.proyecto)==null?void 0:y.cliente.nombre),1),s("p",null," Fecha Inicio:"+l((q=r.gasto.proyecto)==null?void 0:q.fecha_inicio),1)]}),_:1}),t(p),t(i,{class:"row"},{default:o(()=>[s("p",null," Nombre Entidad: "+l(r.gasto.Nombre),1),t(d),s("p",null," Direcci\uFFFDn: "+l(r.gasto.direccion),1)]),_:1}),t(i,{class:"row"},{default:o(()=>[s("p",null," Monto Inicial: "+l(r.gasto.cuentaporpagar.montoinicial),1),t(d),s("p",null," Monto Restante: "+l(r.gasto.cuentaporpagar.montorestante),1)]),_:1}),t(i,{class:"row"},{default:o(()=>[s("p",null," NCF: "+l(r.gasto.NCF),1),t(d),s("p",null," Factura: "+l(r.gasto.factura),1),t(d),s("p",null," RNC: "+l(r.gasto.RNC),1)]),_:1}),t(i,{class:"row"},{default:o(()=>[t(f,{label:"Productos",color:"primary",icon:"search",onClick:n[0]||(n[0]=a=>r.productos=!0)})]),_:1})]),_:1})]),t(c,{class:"my-card"},{default:o(()=>[t(i,null,{default:o(()=>[t(_,{flat:"",bordered:"",title:"Pagos Realizados",rows:r.pagos,columns:r.colum,color:"primary","row-key":"name",filter:e.filter},{body:o(a=>[t(w,{props:a},{default:o(()=>[t(m,{key:"cuenta.numerocuenta",props:a},{default:o(()=>[u(l(a.row.cuenta.numerocuenta),1)]),_:2},1032,["props"]),t(m,{key:"cuenta.numerocuenta",props:a},{default:o(()=>[u(l(a.row.cuenta.banco),1)]),_:2},1032,["props"]),t(m,{key:"cuenta.moneda.valor",props:a},{default:o(()=>[u(l(a.row.cuenta.moneda.valor),1)]),_:2},1032,["props"]),t(m,{key:"pago",props:a},{default:o(()=>[u(l(a.row.pago),1)]),_:2},1032,["props"]),t(m,{key:"numerocheque",props:a},{default:o(()=>[u(l(a.row.numerocheque),1)]),_:2},1032,["props"]),t(m,{key:"createdAt",props:a},{default:o(()=>[u(l(h.formatFecha(a.row.createdAt)),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","filter"])]),_:1})]),_:1}),t(c,{class:"my-card"},{default:o(()=>[t(i,null,{default:o(()=>[I]),_:1}),t(p),t(i,{class:"horizontal"},{default:o(()=>[t(A,{filled:"",modelValue:r.pago.idcuenta,"onUpdate:modelValue":n[1]||(n[1]=a=>r.pago.idcuenta=a),options:r.cuentas,"option-value":a=>Object(a)===a&&"id"in a?a.id:null,"option-label":a=>Object(a)===a&&"numerocuenta"in a?a.numerocuenta:"- Numero Cuenta -","emit-value":"","map-options":""},null,8,["modelValue","options","option-value","option-label"])]),_:1}),t(i,{class:"horizontal"},{default:o(()=>[t(v,{filled:"",modelValue:r.pago.pago,"onUpdate:modelValue":n[2]||(n[2]=a=>r.pago.pago=a),label:"Monto",mask:"#.##","fill-mask":"0","reverse-fill-mask":"","input-class":"text-right"},null,8,["modelValue"])]),_:1}),t(i,{class:"horizontal"},{default:o(()=>[t(v,{filled:"",modelValue:r.pago.numerocheque,"onUpdate:modelValue":n[3]||(n[3]=a=>r.pago.numerocheque=a),label:"Numero de Cheque"},null,8,["modelValue"])]),_:1}),t(p),t(C,null,{default:o(()=>[t(f,{label:"Enviar",icon:"send",type:"submit",color:"primary",flat:"",class:"q-ml-sm",onClick:n[4]||(n[4]=a=>h.AddPago())})]),_:1})]),_:1}),t(P,{modelValue:r.productos,"onUpdate:modelValue":n[5]||(n[5]=a=>r.productos=a),"full-width":""},{default:o(()=>[t(c,null,{default:o(()=>[t(i,null,{default:o(()=>[t(_,{flat:"",bordered:"",title:"Productos",rows:r.items,columns:r.columsitems,color:"primary","row-key":"name",filter:e.filter},{body:o(a=>[t(w,{props:a},{default:o(()=>[t(m,{key:"cantidad",props:a},{default:o(()=>[u(l(a.row.cantidad),1)]),_:2},1032,["props"]),t(m,{key:"descripcion",props:a},{default:o(()=>[u(l(a.row.descripcion),1)]),_:2},1032,["props"]),t(m,{key:"importeimpuesto",props:a},{default:o(()=>[u(l(a.row.importeimpuesto),1)]),_:2},1032,["props"]),t(m,{key:"importe",props:a},{default:o(()=>[u(l(a.row.importe),1)]),_:2},1032,["props"]),t(m,{key:"valortotal",props:a},{default:o(()=>[u(l(a.row.valortotal),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","filter"])]),_:1}),t(C,{align:"right",class:"bg-white text-teal"},{default:o(()=>[V(t(f,{flat:"",label:"Salir"},null,512),[[M]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var ae=k(x,[["render",U]]);export{ae as default};
