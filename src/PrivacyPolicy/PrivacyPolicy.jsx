import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="policyPage">
      <div className="policyPanel">
        <h1 className="policyTitle">Política de Privacidad</h1>
        <p className="policyUpdated">Última actualización: {new Date().toLocaleDateString("es-ES")}</p>

        <section className="policySection">
          <h2>1. Responsable del tratamiento</h2>
          <p>
            Este sitio web es propiedad de <strong>La Kasita</strong> (restaurante). Para cualquier consulta relacionada
            con privacidad, puedes contactar con nosotros en:{" "}
            <a href="mailto:lakasitatapas@gmail.com">lakasitatapas@gmail.com</a>.
          </p>
        </section>

        <section className="policySection">
          <h2>2. Qué datos recopilamos</h2>
          <p>
            Actualmente este sitio web no dispone de registro de usuarios ni formularios de contacto. Aun así, al navegar
            por Internet, algunos datos técnicos pueden ser tratados automáticamente:
          </p>
          <ul>
            <li>Dirección IP, tipo de navegador y sistema operativo.</li>
            <li>Fecha y hora de acceso, páginas visitadas y datos de rendimiento.</li>
          </ul>
          <p>
            Estos datos pueden aparecer en registros técnicos del proveedor de alojamiento (logs) con fines de seguridad,
            mantenimiento y correcto funcionamiento del sitio.
          </p>
        </section>

        <section className="policySection">
          <h2>3. Finalidad del tratamiento</h2>
          <p>Tratamos los datos técnicos mencionados para:</p>
          <ul>
            <li>Garantizar el funcionamiento, seguridad y disponibilidad del sitio.</li>
            <li>Prevenir fraude, abuso o accesos no autorizados.</li>
            <li>Mejorar el rendimiento y la experiencia de usuario.</li>
          </ul>
        </section>

        <section className="policySection">
          <h2>4. Base legal</h2>
          <p>
            La base legal para el tratamiento de datos técnicos es el <strong>interés legítimo</strong> en mantener la
            seguridad y el correcto funcionamiento del sitio web.
          </p>
        </section>

        <section className="policySection">
          <h2>5. Servicios de terceros</h2>
          <p>
            Este sitio puede incluir servicios de terceros que podrían recopilar datos técnicos (por ejemplo, tu IP) al
            cargarse en tu navegador:
          </p>
          <ul>
            <li>
              <strong>Google Maps</strong> (mapa incrustado) para mostrar la ubicación del restaurante.
            </li>
            <li>
              Enlaces a redes sociales como <strong>Instagram</strong> y <strong>Facebook</strong>.
            </li>
          </ul>
          <p>
            El uso de estos servicios se rige por sus propias políticas de privacidad. Te recomendamos revisarlas si lo
            deseas.
          </p>
        </section>

        <section className="policySection">
          <h2>6. Conservación de los datos</h2>
          <p>
            Los datos técnicos (logs) se conservan durante el tiempo necesario para garantizar la seguridad y el
            funcionamiento del sitio, según las políticas del proveedor de alojamiento.
          </p>
        </section>

        <section className="policySection">
          <h2>7. Derechos de las personas usuarias</h2>
          <p>
            Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad,
            enviando una solicitud al correo:{" "}
            <a href="mailto:lakasitatapas@gmail.com">lakasitatapas@gmail.com</a>.
          </p>
          <p>
            También tienes derecho a presentar una reclamación ante la autoridad de control competente (en España, la
            Agencia Española de Protección de Datos - AEPD).
          </p>
        </section>

        <section className="policySection">
          <h2>8. Cambios en esta política</h2>
          <p>
            Podemos actualizar esta Política de Privacidad para reflejar cambios en el sitio o requisitos legales. La
            fecha de “Última actualización” se modificará en consecuencia.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
