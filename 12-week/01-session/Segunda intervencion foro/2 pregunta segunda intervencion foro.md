David Felipe Perdomo Castillo

# Pregunta 2: ¿Qué errores de diseño han encontrado en apps que utilizan a diario y cómo se podrían mejorar?

En el uso cotidiano de aplicaciones móviles, es común encontrar errores de diseño que afectan negativamente la experiencia del usuario. Estos errores, aunque a veces sutiles, pueden generar frustración, abandono y pérdida de confianza en la marca. Los fallos más frecuentes suelen estar relacionados con la **sobrecarga de información**, la **falta de accesibilidad**, los **tiempos de carga excesivos** y la **inconsistencia visual**.

---

## 1. Sobrecarga de información
Algunas aplicaciones, como ciertas versiones de Facebook o aplicaciones de noticias, presentan una interfaz saturada de botones, banners y notificaciones. Esto distrae al usuario y dificulta la navegación, generando fatiga visual.

**Cómo mejorarlo:**
- Aplicar el principio de *minimalismo funcional*.
- Priorizar la información esencial en cada pantalla.
- Utilizar espacios en blanco para mejorar la legibilidad.

---

## 2. Falta de accesibilidad
Un error frecuente es el uso de contrastes de color insuficientes o tamaños de texto muy pequeños, lo que dificulta la lectura para personas con baja visión. Algunas apps también omiten etiquetas para lectores de pantalla.

**Cómo mejorarlo:**
- Cumplir con las pautas **WCAG 2.1**.
- Incluir etiquetas *semantics* en los componentes.
- Ajustar automáticamente el tamaño de fuente según las preferencias del dispositivo.

---

## 3. Inconsistencia visual
Cambiar bruscamente estilos, colores o posiciones de botones puede confundir al usuario. Por ejemplo, cuando un botón de “guardar” cambia de lugar o color en diferentes secciones de la misma app.

**Cómo mejorarlo:**
- Mantener una **guía de estilo visual**.
- Reutilizar componentes de interfaz comunes.
- Probar la coherencia de la UI mediante tests de usabilidad.

---

## 4. Lentitud o tiempos de carga largos
Aplicaciones que tardan más de tres segundos en cargar generan una mala impresión. Esto ocurre por imágenes no optimizadas o procesos innecesarios al iniciar.

**Cómo mejorarlo:**
- Optimizar recursos multimedia.
- Implementar *lazy loading*.
- Mostrar animaciones o barras de progreso que indiquen carga (feedback visual).

---

## Reflexión
Los errores de diseño no solo afectan la estética, sino también la **usabilidad, accesibilidad y confianza del usuario**. Un diseño deficiente puede convertir una aplicación útil en una experiencia frustrante. Mejorar estos aspectos implica aplicar principios de **UX/UI centrados en el usuario**, priorizando la claridad, consistencia y retroalimentación constante. En un entorno digital competitivo, la optimización continua del diseño se traduce en mayor retención y lealtad de los usuarios.

---

## Bibliografía
- Norman, D. A. (2013). *The Design of Everyday Things*. Basic Books.  
- Nielsen, J., & Budiu, R. (2012). *Mobile Usability*. New Riders.  
- Cooper, A., Reimann, R., Cronin, D., & Noessel, C. (2014). *About Face: The Essentials of Interaction Design*. Wiley.  
- W3C. (2018). *Web Content Accessibility Guidelines (WCAG) 2.1*.

---

## Ejemplo (Código - Flutter)

```dart
// Ejemplo de mejora de accesibilidad y feedback visual en un botón
Semantics(
  label: 'Botón para guardar cambios',
  child: ElevatedButton.icon(
    icon: Icon(Icons.save),
    onPressed: () {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text("Cambios guardados correctamente"))
      );
    },
    style: ElevatedButton.styleFrom(
      minimumSize: Size(200, 50),
    ),
    label: Text('Guardar'),
  ),
);
