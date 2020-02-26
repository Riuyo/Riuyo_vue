let Koa = require('koa')
let KoaRouter = require('koa-router');


const app = new Koa();
const router = new KoaRouter();


let cateNavList = require('./datas/cateNavDatas.json');
router.get('/getSortNavList', (ctx, next) => {
  ctx.body = cateNavList
});



let cateList = require('./datas/cateLists.json');
router.get('/getSortList', (ctx, next) => {
  ctx.body = cateList
});



app
  .use(router.routes())
  .use(router.allowedMethods())


app.listen('3001', () => {
  console.log('服务器地址: http://localhost:3001');
})
