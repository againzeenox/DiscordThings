window.___wp = function(e) {
  let id = e.c[Object.keys(e.c).find((k) => e.c[k]?.exports?.default?.isDeveloper === false)];
  if (id) Object.defineProperty(id.exports.default, "isDeveloper", {get:()=>true});
  delete window.___wp;
}
webpackChunkdiscord_app.push([["wp_isdev_patch"], {},window.___wp]);
