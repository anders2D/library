/**
 * API distritiendamj
 * Documentación Api distritiendamj
 *
 * OpenAPI spec version: v1
 * Contact: wilson.199819@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class Productos {
    'id'?: number;
    'codigo': number;
    'nombre': string;
    'descripcion': string;
    'categoria'?: number | null;
    'imagen'?: string | null;
    'precio'?: string | null;
    'estado'?: ProductosEstadoEnum | null;
    'fechaVencimiento': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "codigo",
            "baseName": "codigo",
            "type": "number",
            "format": ""
        },
        {
            "name": "nombre",
            "baseName": "nombre",
            "type": "string",
            "format": ""
        },
        {
            "name": "descripcion",
            "baseName": "descripcion",
            "type": "string",
            "format": ""
        },
        {
            "name": "categoria",
            "baseName": "categoria",
            "type": "number",
            "format": ""
        },
        {
            "name": "imagen",
            "baseName": "imagen",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "precio",
            "baseName": "precio",
            "type": "string",
            "format": "decimal"
        },
        {
            "name": "estado",
            "baseName": "estado",
            "type": "ProductosEstadoEnum",
            "format": ""
        },
        {
            "name": "fechaVencimiento",
            "baseName": "fecha_vencimiento",
            "type": "string",
            "format": "date"
        }    ];

    static getAttributeTypeMap() {
        return Productos.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum ProductosEstadoEnum {
    Activo = 'activo',
    Inactivo = 'inactivo',
    Agotado = 'agotado'
}

