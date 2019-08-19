# StoreInterface Component

StoreInterface
Interface between UI and implementation logic

## Install

```
npm install corex-store-interface -S
```

## Signature

```
params - ReactComponent props

params.manifest - Manifest file that defines storefront configuration

params.render - Function of type ({routeProps, device, data, error}) => React.Node. The output of this function will be rendered by the StoreInterface.
```

## Usage

```
  <StoreInterface
    styles={styles}
    manifest={manifest}
    render={({match, history, location, device, data, error}) => {
      return <div>Hello world!</div>
    }}
  />
```

## StoreInterfaceRender

```
params - ReactComponent props

params.match - A match object contains information about how a <Route path> matched the URL. match objects contain the following properties: {params, isExact, path, url}

params.history - The term “history” and "history object" in this documentation refers to the history package, which is one of only 2 major dependencies of React Router (besides React itself), and which provides several different implementations for managing session history in JavaScript in various environments.

params.location - Locations represent where the app is now, where you want it to go, or even where it was.

params.device - An object contains information about the client device and his capabilities.

params.data - Object containing data obtained from the graphql query; the shape of this object will match the shape of the query. If this object is not defined, it means that the data is still being fetched.

params.error - Error will be defined if an error has occurred while fetching the graphql query.
```

## Semantic colors

````
//Background

.bg-base { background-color: #fff; }
.bg-base--inverted { background-color: #3f3f40; }
.bg-action-primary { background-color: #134cd8; }
.bg-action-secondary { background-color: #eef3f7; }
.bg-emphasis { background-color: #f71963; }
.bg-disabled { background-color: #e3e4e6; }
.bg-success { background-color: #8bc34a; }
.bg-success--faded { background-color: #eafce3; }
.bg-danger { background-color: #ff4c4c; }
.bg-danger--faded { background-color: #ffe6e6; }
.bg-warning { background-color: #ffb100; }
.bg-warning--faded { background-color: #fff6e0; }
.bg-muted-1 { background-color: #727273; }
.bg-muted-2 { background-color: #979899; }
.bg-muted-3 { background-color: #cacbcc; }
.bg-muted-4 { background-color: #e3e4e6; }
.bg-muted-5 { background-color: #f2f4f5; }
.bg-transparent { background-color: transparent; }

//Border

.b--action-primary { border-color: #1346d8; }
.b--action-secondary { border-color: #eef3f7; }
.b--emphasis { border-color: #f71963; }
.b--disabled { border-color: #e3e4e6; }
.b--success { border-color: #8bc34a; }
.b--success--faded { border-color: #eafce3; }
.b--danger { border-color: #ff4c4c; }
.b--danger--faded { border-color: #ffe6e6; }
.b--warning { border-color: #ffb100; }
.b--warning--faded { border-color: #fff6e0; }
.b--muted-1 { border-color: #727273; }
.b--muted-2 { border-color: #979899; }
.b--muted-3 { border-color: #cacbcc; }
.b--muted-4 { border-color: #e3e4e6; }
.b--muted-5 { border-color: #f2f4f5; }
.b--transparent { border-color: transparent; }

//Color

.c-action-primary { color: #134cd8; }
.c-action-secondary { color: #eef3f7; }
.c-link { color: #134cd8; }
.c-emphasis { color: #f71963; }
.c-disabled { color: #979899; }
.c-success { color: #8bc34a; }
.c-success--faded { color: #eafce3; }
.c-danger { color: #ff4c4c; }
.c-danger--faded { color: #ffe6e6; }
.c-warning { color: #ffb100; }
.c-warning--faded { color: #fff6e0; }
.c-muted-1 { color: #727273; }
.c-muted-2 { color: #979899; }
.c-muted-3 { color: #cacbcc; }
.c-muted-4 { color: #e3e4e6; }
.c-muted-5 { color: #f2f4f5; }
.c-on-base { color: #3f3f40; }
.c-on-base--inverted { color: #fff; }
.c-on-action-primary { color: #fff; }
.c-on-action-secondary { color: #134cd8; }
.c-on-emphasis { color: #fff; }
.c-on-disabled { color: #979899; }
.c-on-success { color: #fff; }
.c-on-success--faded { color: #3f3f40; }
.c-on-danger { color: #fff; }
.c-on-danger--faded { color: #3f3f40; }
.c-on-warning { color: #fff; }
.c-on-warning--faded { color: #1a1a1a; }
.c-on-muted-1 { color: #fff; }
.c-on-muted-2 { color: #fff; }
.c-on-muted-3 { color: #3f3f40; }
.c-on-muted-4 { color: #3f3f40; }
.c-on-muted-5 { color: #3f3f40; }

//Hover color

.hover-c-action-primary:focus { color: #0c389f; }
.hover-c-action-primary:hover { color: #0c389f; }
.hover-c-action-secondary:focus { color: #dbe9fd; }
.hover-c-action-secondary:hover { color: #dbe9fd; }
.hover-c-link:focus { color: #0c389f; }
.hover-c-link:hover { color: #0c389f; }
.hover-c-emphasis:focus { color: #dd1659; }
.hover-c-emphasis:hover { color: #dd1659; }
.hover-c-success:focus { color: #8bc34a; }
.hover-c-success:hover { color: #8bc34a; }
.hover-c-success--faded:focus { color: #eafce3; }
.hover-c-success--faded:hover { color: #eafce3; }
.hover-c-danger:focus { color: #ff4c4c; }
.hover-c-danger:hover { color: #ff4c4c; }
.hover-c-danger--faded:focus { color: #ffe6e6; }
.hover-c-danger--faded:hover { color: #ffe6e6; }
.hover-c-warning:focus { color: #ffb100; }
.hover-c-warning:hover { color: #ffb100; }
.hover-c-warning--faded:focus { color: #fff6e0; }
.hover-c-warning--faded:hover { color: #fff6e0; }
.hover-c-on-action-primary:focus { color: #fff; }
.hover-c-on-action-primary:hover { color: #fff; }
.hover-c-on-action-secondary:focus { color: #134cd8; }
.hover-c-on-action-secondary:hover { color: #134cd8; }
.hover-c-on-emphasis:focus { color: #fff; }
.hover-c-on-emphasis:hover { color: #fff; }
.hover-c-on-success:focus { color: #fff; }
.hover-c-on-success:hover { color: #fff; }
.hover-c-on-success--faded:focus { color: #3f3f40; }
.hover-c-on-success--faded:hover { color: #3f3f40; }
.hover-c-on-danger:focus { color: #fff; }
.hover-c-on-danger:hover { color: #fff; }
.hover-c-on-danger--faded:focus { color: #3f3f40; }
.hover-c-on-danger--faded:hover { color: #3f3f40; }
.hover-c-on-warning:focus { color: #fff; }
.hover-c-on-warning:hover { color: #fff; }
.hover-c-on-warning--faded:focus { color: #1a1a1a; }
.hover-c-on-warning--faded:hover { color: #1a1a1a; }

//Hover background

.hover-bg-action-primary:focus { background-color: #0c389f; }
.hover-bg-action-primary:hover { background-color: #0c389f; }
.hover-bg-action-secondary:focus { background-color: #dbe9fd; }
.hover-bg-action-secondary:hover { background-color: #dbe9fd; }
.hover-bg-emphasis:focus { background-color: #dd1659; }
.hover-bg-emphasis:hover { background-color: #dd1659; }
.hover-bg-success:focus { background-color: #8bc34a; }
.hover-bg-success:hover { background-color: #8bc34a; }
.hover-bg-success--faded:focus { background-color: #eafce3; }
.hover-bg-success--faded:hover { background-color: #eafce3; }
.hover-bg-danger:focus { background-color: #e13232; }
.hover-bg-danger:hover { background-color: #e13232; }
.hover-bg-danger--faded:focus { background-color: #ffe6e6; }
.hover-bg-danger--faded:hover { background-color: #ffe6e6; }
.hover-bg-warning:focus { background-color: #ffb100; }
.hover-bg-warning:hover { background-color: #ffb100; }
.hover-bg-warning--faded:focus { background-color: #fff6e0; }
.hover-bg-warning--faded:hover { background-color: #fff6e0; }
.hover-bg-muted-1:focus { background-color: #727273; }
.hover-bg-muted-1:hover { background-color: #727273; }
.hover-bg-muted-2:focus { background-color: #979899; }
.hover-bg-muted-2:hover { background-color: #979899; }
.hover-bg-muted-3:focus { background-color: #cacbcc; }
.hover-bg-muted-3:hover { background-color: #cacbcc; }
.hover-bg-muted-4:focus { background-color: #e3e4e6; }
.hover-bg-muted-4:hover { background-color: #e3e4e6; }
.hover-bg-muted-5:focus { background-color: #f2f4f5; }
.hover-bg-muted-5:hover { background-color: #f2f4f5; }

//Hover border

.hover-b--action-primary:focus { border-color: #0c389f; }
.hover-b--action-primary:hover { border-color: #0c389f; }
.hover-b--action-secondary:focus { border-color: #dbe9fd; }
.hover-b--action-secondary:hover { border-color: #dbe9fd; }
.hover-b--emphasis:focus { border-color: #dd1659; }
.hover-b--emphasis:hover { border-color: #dd1659; }
.hover-b--success:focus { border-color: #8bc34a; }
.hover-b--success:hover { border-color: #8bc34a; }
.hover-b--success--faded:focus { border-color: #eafce3; }
.hover-b--success--faded:hover { border-color: #eafce3; }
.hover-b--danger:focus { border-color: #e13232; }
.hover-b--danger:hover { border-color: #e13232; }
.hover-b--danger--faded:focus { border-color: #ffe6e6; }
.hover-b--danger--faded:hover { border-color: #ffe6e6; }
.hover-b--warning:focus { border-color: #ffb100; }
.hover-b--warning:hover { border-color: #ffb100; }
.hover-b--warning--faded:focus { border-color: #fff6e0; }
.hover-b--warning--faded:hover { border-color: #fff6e0; }
.hover-b--muted-1:focus { border-color: #727273; }
.hover-b--muted-1:hover { border-color: #727273; }
.hover-b--muted-2:focus { border-color: #979899; }
.hover-b--muted-2:hover { border-color: #979899; }
.hover-b--muted-3:focus { border-color: #cacbcc; }
.hover-b--muted-3:hover { border-color: #cacbcc; }
.hover-b--muted-4:focus { border-color: #e3e4e6; }
.hover-b--muted-4:hover { border-color: #e3e4e6; }
.hover-b--muted-5:focus { border-color: #f2f4f5; }
.hover-b--muted-5:hover { border-color: #f2f4f5; }

//Active

.active-c-link:active { color: #0c389f; }
.active-c-emphasis:active { color: #dd1659; }
.active-c-success:active { color: #8bc34a; }
.active-c-success--faded:active { color: #eafce3; }
.active-c-danger:active { color: #ff4c4c; }
.active-c-danger--faded:active { color: #ffe6e6; }
.active-c-warning:active { color: #ffb100; }
.active-c-warning--faded:active { color: #fff6e0; }
.active-c-on-action-primary:active { color: #fff; }
.active-c-on-action-secondary:active { color: #134cd8; }
.active-c-on-emphasis:active { color: #fff; }
.active-c-on-success:active { color: #fff; }
.active-c-on-success--faded:active { color: #3f3f40; }
.active-c-on-danger:active { color: #fff; }
.active-c-on-danger--faded:active { color: #3f3f40; }
.active-c-on-warning:active { color: #fff; }
.active-c-on-warning--faded:active { color: #1a1a1a; }
.active-bg-action-primary:active { background-color: #0c389f; }
.active-bg-action-secondary:active { background-color: #dbe9fd; }
.active-bg-emphasis:active { background-color: #dd1659; }
.active-bg-success:active { background-color: #8bc34a; }
.active-bg-success--faded:active { background-color: #eafce3; }
.active-bg-danger:active { background-color: #ff4c4c; }
.active-bg-danger--faded:active { background-color: #ffe6e6; }
.active-bg-warning:active { background-color: #ffb100; }
.active-bg-warning--faded:active { background-color: #fff6e0; }
.active-bg-muted-1:active { background-color: #727273; }
.active-bg-muted-2:active { background-color: #979899; }
.active-bg-muted-3:active { background-color: #cacbcc; }
.active-bg-muted-4:active { background-color: #e3e4e6; }
.active-bg-muted-5:active { background-color: #f2f4f5; }
.active-b--action-primary:active { border-color: #0c389f; }
.active-b--action-secondary:active { border-color: #dbe9fd; }
.active-b--emphasis:active { border-color: #dd1659; }
.active-b--success:active { border-color: #8bc34a; }
.active-b--success--faded:active { border-color: #eafce3; }
.active-b--danger:active { border-color: #ff4c4c; }
.active-b--danger--faded:active { border-color: #ffe6e6; }
.active-b--warning:active { border-color: #ffb100; }
.active-b--warning--faded:active { border-color: #fff6e0; }
.active-b--muted-1:active { border-color: #727273; }
.active-b--muted-2:active { border-color: #979899; }
.active-b--muted-3:active { border-color: #cacbcc; }
.active-b--muted-4:active { border-color: #e3e4e6; }
.active-b--muted-5:active { border-color: #f2f4f5; }
```
````
