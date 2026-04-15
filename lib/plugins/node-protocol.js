export default class NodeProtocolWebpackPlugin {

    // public
    apply ( compiler ) {
        compiler.hooks.normalModuleFactory.tap( "TrackNodeImportsPlugin", nmf => {
            nmf.hooks.beforeResolve.tap( "TrackNodeImportsPlugin", resolveData => {
                if ( resolveData.request.startsWith( "node:" ) ) {
                    console.warn( `Node import detected: ${ resolveData.request } in ${ resolveData.context }` );
                }
            } );
        } );
    }
}
