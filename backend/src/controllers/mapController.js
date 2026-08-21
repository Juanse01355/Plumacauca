import { getMapConfig } from '../services/mapService.js';

// GET /api/map/config
// Devuelve la configuración base del mapa
export function getMapConfigController(req, res) {
  const config = getMapConfig();

  return res.status(200).json({
    success: true,
    message: 'Configuración del mapa',
    data: config,
  });
}