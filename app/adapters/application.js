import DS from 'ember-data';
//export default DS.FixtureAdapter;
/*export default DS.JSONAPIAdapter.extend({
});
*/

/*export default DS.FixtureAdapter.extend({
});*/

//export { default } from 'ember-data-fixture-adapter';
export default DS.RESTAdapter.extend({
    namespace: 'api'
});
