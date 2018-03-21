import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { PrecioProducto } from '../models/producto.models';
import { BaseAjaxService, ILoading } from '../../base/services/base-ajax.service';

@Injectable()
export class ListaPreciosService implements ILoading {
    loading$: Subject<boolean> = new Subject();
    private _loading = false;
    get isLoading() { return this._loading; }
    set isLoading(value) {
        if (value !== this._loading) {
            this._loading = value;
            this.loading$.next(this.isLoading);
        }
    }

    constructor(private _db: BaseAjaxService) { }

    getPreciosPreductos(listaPreciosID: number): Observable<PrecioProducto[]> {
        const params = this._db.createParameter('ECOM0001', 4, { 'V4': listaPreciosID });
        this.isLoading = true;
        const rValue = this._db.getData(params).map(res => {
            // TODO: Handle Precio
            let precios: PrecioProducto[];
            if (res.Table1) {
                precios = res.Table1.map(item => {
                    const precio = new PrecioProducto(item.C1);
                    precio.precio = item.C11;
                    precio.listaPreciosID = listaPreciosID;
                    return precio;
                });
            }
            return precios;
        });
        rValue.subscribe(() => { this.isLoading = false; });
        return rValue;
    }

    setPreciosProductos(listaPreciosID: number, precios: PrecioProducto[], callback) {
        const productsData = precios.map(p => `${p.productoID},${p.precio}`);
        const params = this._db.createParameter('ECOM0001', 3, { V3: listaPreciosID, V6: `C0,C1~${productsData.join('~')}` });
        this._db.getData(params).subscribe(() => { callback(); });
        // var qProd = 'C0,C1~' + ConvertToCSV(Enumerable.From($scope.allProductos).Select("x => { A: x['C0'], B: x['Precio'] }").ToArray(), ',', '~');
        // var qSuc = Enumerable.From($scope.allSucursales.findAll('Aplica', true)).Select(function (v) { return v.C0 }).ToArray();
        // ajax({ parameters: createParameter('ECOM0001', 2, { 'V3': $scope.DetailID, 'V6': qSuc.join(',') }), callback: function (res) { console.log(res.Table); $location.
    }
}
