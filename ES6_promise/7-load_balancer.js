export default function loadBalancer(chinaDownload, USDownload) {
  // primise.raice obtiene la 1era promesa resulta y devuelve su valor
  return Promise.race([chinaDownload, USDownload]);
}
