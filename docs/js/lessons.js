export const lessons = [
  {
    numLessons: 3,
    issue: 'Diagramas ER',
    day: 20,
    msg: `<small>“No te limita tu edad, te limitan tus pensamientos”.<br>
    La edad es solo un número </small>`,
    myProgress: '🥚>🐣>🐥>',

    exercise: [
      {
        numExercise: 1,
        title: '',
        description:`atleta (<b> PK nunDorsal:</b> INT, nombre: VARCHAR, pais VARCHAR, sexo: CHAR,<b> FK relevaA: INT [Ref_alteta nunDorsal])</b>`,
        urlCode: 'https://github.com/TECHMA-Bootcamp-FullStack-Java-Angular/dmb-tsys-java-1110-ta10/tree/main/src/com/tmbs/ta10_01',
        urlPG: '',
      },
      {
        numExercise: 2,
        title: '',
        description:  `<li> elemento ( name: VARCHAR,</b> pesoAtomico: DOUBLE, simbolo: VARCHAR, nAtomico: DOUBLE ) </li>
        <li> compuesto (<b> PK name: VARCHAR,</b> estado: VARCHAR) </li>
        <li> gaseoso (<b> PK name: VARCHAR, </b> coefExpan: DOUBLE,  tempLic: DOUBLE,<b> FK nombreCompuesto: VARCHAR [Ref_compuesto name)]) </b> </li>
        <li> liquido (<b> PK name: VARCHAR,</b> densidad: DOUBLE, tempEvap: DOUBLE,<b> FK nombreCompuesto: VARCHAR [Ref_compuesto name)]) </b> </li>
        <li> solido (<b> PK name: VARCHAR,</b> color: VARCHAR, olor: VARCHAR, dureza: INT,<b>FK  nombreCompuesto: VARCHAR [Ref_compuesto name)]) </b> </li>
        <li> compuesto_por (<b> PK nombreComp: VARCHAR  [REF_elemento name],PK nombreElem: VARCHAR [REF compuesto],</b> proporcion: VARCHAR) </li>
        `,
        urlCode: 'https://github.com/TECHMA-Bootcamp-FullStack-Java-Angular/dmb-tsys-java-1110-ta10/tree/main/src/com/tmbs/ta10_02',
        urlPG: ''
      },
      {
        numExercise: 3,
        title: '',
        description: `  
        <li> cliente (<b> PK DNI: VARCHAR</b>, nombre: VARCHAR, apellidos: VARCHAR, direccion: VARCHAR, ciudad: VARCHAR)</li>
        <li> sucursal (<b> PK numeroSucursal: INT</b>, ciudad: VARCHAR, activo: VARCHAR)</li>
        <li> cuenta (<b> PK numeroCuenta: VARCHAR</b>, Saldo: DOUBLE)</li>
        <li> transaccion (<b> PK numTransaccion: VARCHAR</b>, Cuenta: VARCHAR, Fecha: DATE, tipoOperacion: VARCHAR, Cantidad: DOUBLE,<b> FK cuenta: VARCHAR [REF_cuenta numCuenta])</b></li>
        <li> clienteCuentaSucursal (<b> PK cliente: VARCHAR [REF_cliente DNI], sucursal: INT  [REF_sucursal numeroSucursal], cuenta: VARCHAR [REF_cuenta numeroCuenta])</b></li>
`,
        urlCode: 'https://github.com/TECHMA-Bootcamp-FullStack-Java-Angular/dmb-tsys-java-1110-ta10/tree/main/src/com/tmbs/ta10_04',
        urlPG: ''
      },
      {
        numExercise: 4,
        title: '',
        description: `<small>
        <li> parqueBomberos (<b> PK codParque: INT </b>, nombre: VARCHAR, dirección: VARCHAR, teléfono: VARCHAR, categoría: VARCHAR) </li>
        <li> coche (<b> PK numCoche: INT </b>, marca: VARCHAR, modelo: VARCHAR, numMatricula: VARCHAR, fechaCompra: DATE, fechaUltRev: DATE,<b>FK  codParque: INT [REF_parqueBomberos cod_parque])</b> </li>
        <li> equipo (<b> PK equipo: INT </b>, nombre: VARCHAR) </li>
        <li> peticionServicio (<b> PK codPserv: INT </b>, tipoServ: VARCHAR, gradoUrgencia: VARCHAR,<b>FK  codTeam: INT [REF_equipo equipo]) </b> </li>
        <li> recibe (<b> PK codParque: INT [REF_parqueBomberos codParque] , codPserv: INT [REF_peticionServicio codPserv], </b> fecha: DATE, hora: VARCHAR) </li>
        <li> bombero (<b> PK codBom: INT </b>, nombre: VARCHAR, apellidos: VARCHAR, fechaNac: DATE, dni: VARCHAR, dirección: VARCHAR, telefono: VARCHAR, puesto: VARCHAR,<b>FK  codParque: INT [REF_parqueBomberos codParque],FK  codTeam: INT [REF_equipo equipo]) </b></li>
        <li> periodo (<b> PK fechaInicio: DATE </b>, fechaFin: DATE) </li>
        <li> turno (<b> PK codTurno </b>: INT, descripción: VARCHAR) </li>
        <li> bomberoTrabajaEn (<b> PK codBom: INT [REF_bombero codBom], codTurno: INT [REF_turno codTurno], periodoInicio: DATE [REF_Periodo fechaInicio], periodoFin: DATE [REF_Periodo fechaFin]) </b> </li>
        </small>
        `,
        urlCode: 'https://github.com/TECHMA-Bootcamp-FullStack-Java-Angular/dmb-tsys-java-1110-ta10/tree/main/src/com/tmbs/ta10_03',
        urlPG: ''
      },
      {
        numExercise: 5,
        title: '',
        description: `
        <li> sanción (<b> PK NDias: INT </b>)</li>
        <li> socios (<b> PK NSocio: INT </b>, nombre: VARCHAR, apellidos: VARCHAR, telefono: VARCHAR, fechaCad: DATE,<b> FK  NDias: INT [REF_NDias INT]) </b></li>
        <li> fondo (<b> PK titulo: VARCHAR </b>, autor: VARCHAR, cantidad: INT)</li>
        <li> libro (<b> PK signatura: VARCHAR </b>, disponible: BOOLEAN, titulo: VARCHAR [REF_autor titulo],<b> FK autor: VARCHAR [REF_autor autor])</b></li>
        <li> prestamo (<b> PK NPrestamo: INT </b>, fechaPrestamo: DATE, tipo: VARCHAR)</li>
        <li> prestamoE (<b> PK NPrestamo: INT [REF_Prestamo NPrestamo] </b>, fechaDevol: DATE)</li>
        <li> prestamos (<b> PK NPrestamo: INT [REF_Prestamo NPrestamo])</b></li>

        `,
        urlCode: 'https://github.com/TECHMA-Bootcamp-FullStack-Java-Angular/dmb-tsys-java-1110-ta10/tree/main/src/com/tmbs/ta10_05',
        urlPG: ''
      },
    ]
  },
]


 
