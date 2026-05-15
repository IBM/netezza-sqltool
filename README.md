
# IBM Netezza Developer Extension

A Visual Studio Code extension that adds IBM Netezza database support to [SQLTools](https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools).

## Features

- Connect to IBM Netezza databases
- Browse database schemas, tables, views, and functions
- Execute SQL queries with syntax highlighting
- View and export query results


### Basic Connection

```json
{
  "name": "Netezza Connection",
  "driver": "Netezza",
  "server": "localhost",
  "port": 5480,
  "database": "your_database",
  "username": "your_username",
  "password": "your_password"
}
```



## Requirements

- IBM Netezza database server
- Node.js >= 16.0.0
- SQLTools extension



## Release Notes

### 0.1.0

- Initial release of IBM Netezza driver
- Support for basic database operations
- Schema, table, view, and function browsing
- Query execution and result viewing


## Credits

This driver is built on top of the [ibm-netezza](https://github.com/IBM/nz-node) Node.js driver.

## License

MIT License - see [LICENSE](LICENSE) file for details
