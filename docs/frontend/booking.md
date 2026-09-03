# Agenda y flujo de WhatsApp

La agenda es un flujo local de selección. No existe backend, disponibilidad remota ni confirmación automática. La confirmación final continúa ocurriendo en WhatsApp.

## Estado de la agenda

`BookingSection` mantiene:

```js
{
  serviceId,
  date,
  selectedSlot,
  name,
  phone,
  status
}
```

La implementación puede separar estados internos para mensajes y fallback, pero el flujo debe conservar esos datos y su orden.

## Servicios

El selector usa `services` desde [`src/data/services.js`](../../src/data/services.js). La misma fuente alimenta las tarjetas visuales mediante sus categorías. Al agregar un servicio:

1. agregar todos sus campos funcionales;
2. definir duración en minutos;
3. definir `bookingLabel`, `infoLabel` e `infoDetail` si corresponde;
4. incluirlo en la categoría visual adecuada;
5. comprobar que la duración cabe entre las 10:00 y las 19:00.

## Reglas de horarios

Las constantes están en [`bookingUtils.js`](../../src/components/booking/bookingUtils.js):

- apertura: `10:00`;
- cierre: `19:00`;
- intervalo: `30` minutos;
- días cerrados: domingo y lunes (`[0, 1]`);
- los horarios del día actual con poco margen de anticipación no se muestran;
- un horario previamente solicitado se muestra deshabilitado y tachado.

Las fechas se manejan como `YYYY-MM-DD` local para evitar desfases por UTC.

## Persistencia local

Las solicitudes se guardan opcionalmente en `localStorage` con la clave:

```text
gh_estilista_requested_slots
```

La estructura guarda los horarios solicitados agrupados por fecha. Si `localStorage` no está disponible, el flujo de WhatsApp sigue funcionando.

## Mensaje y URL

[`src/lib/whatsapp.js`](../../src/lib/whatsapp.js) centraliza:

- el número destino `56953326815`;
- el mensaje final;
- la codificación de la URL `https://wa.me/...?...`.

El mensaje actual no debe cambiar sin aprobación comercial:

```text
Hola Gabriela, quiero agendar hora:
- Servicio: [servicio]
- Fecha: [fecha]
- Hora: [hora] hrs
- Nombre: [nombre]
- Teléfono: [teléfono]
```

Antes de abrir WhatsApp se validan nombre y teléfono. El teléfono se comprueba usando sus dígitos, pero se conserva el formato escrito por la persona dentro del mensaje.

## Cambios futuros

Si la agenda se conecta a un backend, la integración debe reemplazar únicamente la fuente de disponibilidad y la confirmación. No debe mezclar llamadas de red con el render del calendario ni alterar la composición visual sin una tarea específica de diseño.
