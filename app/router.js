'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

  const {
    router,
    controller,
    middleware
  } = app;


  const {
    employee,
  } = controller;
  const userRequired = middleware.userRequired();
  const userAdmin = middleware.userAdmin();



  router.get('/', controller.home.index);
  router.get('/simple', controller.simple.excel);
  router.get('/complex', controller.complex.excel);
  router.post('/api/employee/import', controller.import.index);
  router.post("/api/employee/create", employee.create);
};