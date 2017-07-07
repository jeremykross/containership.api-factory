const ContainershipApi = require('@containership/containership.api-bridge');
const KubernetesApi = require('@containership/containership.k8s.api-bridge');

const Constructor = process.env.CS_ORCHESTRATOR === 'kubernetes' ? KubernetesApi : ContainershipApi;
const DEFAULT_PORT = 8080;

module.exports = { Constructor, DEFAULT_PORT };
