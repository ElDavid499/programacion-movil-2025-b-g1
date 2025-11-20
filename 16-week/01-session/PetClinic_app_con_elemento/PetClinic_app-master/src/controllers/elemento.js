class Elemento {
    constructor(id, codigo, nombre, estatus) {
        this.id = id;
        this.codigo = codigo;
        this.nombre = nombre;
        this.estatus = estatus; // true o false
    }

    getId() { return this.id; }
    setId(id) { this.id = id; }

    getCodigo() { return this.codigo; }
    setCodigo(codigo) { this.codigo = codigo; }

    getNombre() { return this.nombre; }
    setNombre(nombre) { this.nombre = nombre; }

    isEstatus() { return this.estatus; }
    setEstatus(estatus) { this.estatus = estatus; }
}
