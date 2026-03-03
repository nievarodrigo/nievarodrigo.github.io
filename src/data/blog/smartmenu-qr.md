---
title: QuickOrder Gastro — Optimización de Flujo Gastronómico
author: Rodrigo Nieva
pubDatetime: 2025-12-15T12:00:00Z
slug: gastronomy-order-flow
featured: true
tags:
  - Python
  - Webhooks
  - FastAPI
  - Real-time
description: "Sistema orientado a resolver flujos de venta ineficientes en mostrador, digitalizando el pedido para evitar el abandono de clientes mediante sincronización en tiempo real."
---

## Motivación
El proyecto nace para resolver un **flujo de negocio ineficiente** en una cafetería: las esperas excesivas en mostrador generaban confusión y hacían que los clientes abandonaran el local antes de pedir. La solución descentraliza la venta, permitiendo que el cliente gestione su orden desde la mesa, eliminando la fricción operativa.

## Implementación Tecnológica
- **Arquitectura de Baja Latencia:** Construido bajo **FastAPI** y **MySQL** para asegurar respuestas inmediatas y una experiencia de usuario fluida.
- **Sincronización vía Webhooks:** Implementación de **Webhooks** para que el personal en mostrador visualice instantáneamente los pedidos entrantes, permitiendo una preparación coordinada sin intervención manual.
- **Integridad de Datos:** Validación estricta de carritos y estados de pedido vinculados a **QR IDs únicos por mesa**, garantizando que la información sea consistente desde que el cliente pide hasta que se factura.

## Resultados Proyectados
- **40% de reducción** en los tiempos de espera percibidos.
- **Eliminación del cuello de botella en mostrador**, mejorando la tasa de conversión de ventas en horas pico.