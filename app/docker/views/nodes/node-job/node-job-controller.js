angular.module('portainer.docker').controller('NodeJobController', [
  '$stateParams', 'NodeService', 'HttpRequestHelper', 'Notifications',
  function NodeJobController($stateParams, NodeService, HttpRequestHelper, Notifications) {
    var ctrl = this;
    ctrl.$onInit = $onInit;

    function $onInit() {
      ctrl.nodeId = $stateParams.id;

      NodeService.node(ctrl.nodeId)
      .then(function onNodeLoaded(node) {
        HttpRequestHelper.setPortainerAgentTargetHeader(node.Hostname);
        ctrl.node = node;
      })
      .catch(function onError(err) {
        Notifications.error('Unable to retrieve host information', err);
      });
    }
  }
]);
