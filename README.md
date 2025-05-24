-- Usuarios (sin cambios)
INSERT INTO Users (UserId, Name, Email, Password, Role) VALUES 
('7320e0b2-b75d-454b-84d8-5005044d5ed8', 'Juan Pérez', 'juan.perez@tienda.com', 'hashedpassword', 'empleado'),
('96ce2f1e-52a2-44bd-95aa-c9ef2c794b64', 'María García', 'maria.garcia@tienda.com', 'hashedpassword', 'admin'),
('1fdd5781-9ae8-4951-b512-91d140925bb3', 'Carlos López', 'carlos.lopez@tienda.com', 'hashedpassword', 'empleado'),
('cfdb017c-3058-48a8-b4ac-19743de577bf', 'Ana Martínez', 'ana.martinez@tienda.com', 'hashedpassword', 'admin'),
('a6e6e2af-9181-4a3d-a900-b89ddfa95812', 'Luisa Rodríguez', 'luisa.rodriguez@tienda.com', 'hashedpassword', 'empleado');

-- Clientes (sin cambios)
INSERT INTO Customers (CustomerId, Name, DNI, Phone, Address) VALUES 
('42169680-20cc-461a-80e5-ada6b62676d9', 'Roberto Sánchez', '11222333', '600111222', 'Calle Principal 123, Madrid'),
('89a1998d-50bf-46e4-abcc-20ed0336c24f', 'Sofía Ramírez', '44555666', '600333444', 'Avenida Libertad 45, Barcelona'),
('c278e071-9003-4dd0-88bf-5dadab951c31', 'David Fernández', '77888999', '600555666', 'Plaza Central 67, Valencia'),
('dda790c7-4f48-41ac-9ae9-1da58b6a954c', 'Elena Gómez', '00111222', '600777888', 'Calle Secundaria 89, Sevilla'),
('be85be25-85c1-43b5-adc1-4095ea2774fb', 'Jorge Díaz', '33444555', '600999000', 'Paseo del Parque 12, Bilbao');

-- Categorías actualizadas para computadoras
INSERT INTO Categories (CategoryId, Name) VALUES 
('400326ff-f048-469e-aaae-5e332a16e089', 'Laptops y PCs'),
('902f4fad-337c-4a55-b0c9-729f68c2b9cb', 'Componentes'),
('ad5c2e1c-782b-4544-a63c-7574da96bd57', 'Periféricos'),
('f9d035ec-2700-4771-bcf0-af766d4bf7f2', 'Software'),
('15eae769-0a31-49a0-b2d0-c6916d4b983f', 'Accesorios');

-- Proveedores actualizados para tecnología
INSERT INTO Suppliers (SupplierId, Name, TaxId, Phone, Address) VALUES 
('a9ef5add-99cc-423c-afc2-30353d2d1323', 'TecnoSuministros S.L.', 'A12345678', '910111222', 'Polígono Industrial Norte, Nave 12, Madrid'),
('aeb75615-31c9-439c-a8f4-77f2c22d7df6', 'CompuParts S.A.', 'B87654321', '930333444', 'Calle de la Industria 45, Barcelona'),
('7a46d1da-a1e6-49bb-b543-5b915515b8d8', 'HardwarePro S.L.', 'C11223344', '960555666', 'Avenida del Mueble 67, Valencia'),
('df35f518-1e50-49cb-94e8-94961ce4e824', 'SoftwareTotal S.A.', 'D55667788', '950777888', 'Polígono Industrial Sur, Nave 3, Sevilla'),
('eced7403-cd79-4920-904d-7db413b7f43f', 'AccesoriosTech S.L.', 'E99887766', '940999000', 'Calle del Juguete 12, Bilbao');

-- Productos (manteniendo imágenes originales pero con descripciones de computación)
INSERT INTO Products (ProductId, Name, Description, Price, Stock, ImageUrl, CategoryId) VALUES 
('889ad30a-0ee8-4152-b7b8-fc1ba90051f5', 'Laptop Gamer X10', 'Laptop de alto rendimiento con GPU dedicada y pantalla 144Hz', 999.99, 30, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk0970QDLrSh92sbxRMvHciGMqgHWOIVpvPw&s', '400326ff-f048-469e-aaae-5e332a16e089'),
('a53d882e-9eb4-47a5-b18d-6dbb391a820b', 'Teclado Mecánico RGB', 'Teclado gaming con switches Cherry MX y retroiluminación RGB', 89.99, 50, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShf6erKXFe_X55Hek9RmF_Z44yjWXftGiBCQ&s', 'ad5c2e1c-782b-4544-a63c-7574da96bd57'),
('50402e31-758f-4a58-a862-47d00e1d01f3', 'Monitor 27" 4K', 'Monitor profesional con resolución 3840x2160 y HDR', 299.99, 25, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe6mfJJ037Wdh2rQIM4DNHn8WfM_guA_yoUw&s', 'ad5c2e1c-782b-4544-a63c-7574da96bd57'),
('f1db0672-5ee2-46da-bb31-d2f6fa14a1de', 'Windows 11 Pro', 'Licencia original de sistema operativo Windows 11 Professional', 199.99, 100, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3f30X0UcNPIEpe-yvZppK2P-nboHe09r71w&s', 'f9d035ec-2700-4771-bcf0-af766d4bf7f2'),
('7951569d-288a-4a58-aa49-9eedf7b2c28e', 'Mouse Gaming', 'Mouse ergonómico con 6 botones programables y 16000 DPI', 49.99, 75, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlvb9V5EKwGK5b5rczsIDvXambBzKTbByumA&s', '15eae769-0a31-49a0-b2d0-c6916d4b983f');

-- Productos de Proveedores (actualizados)
INSERT INTO SupplierProducts (SupplierProductId, SupplierId, ProductId, PurchasePrice) VALUES 
('27da5d84-1f22-4ad5-bbc0-2c8a57bc6fd9', 'a9ef5add-99cc-423c-afc2-30353d2d1323', '889ad30a-0ee8-4152-b7b8-fc1ba90051f5', 750.00),
('fff97c4f-025f-4b01-8912-c8e7e23bfcaa', 'aeb75615-31c9-439c-a8f4-77f2c22d7df6', 'a53d882e-9eb4-47a5-b18d-6dbb391a820b', 60.00),
('4cd0261b-4501-4c20-ba8b-1abd6eef6091', '7a46d1da-a1e6-49bb-b543-5b915515b8d8', '50402e31-758f-4a58-a862-47d00e1d01f3', 220.00),
('b87ff163-63c8-4bff-8574-dc1583cedda3', 'df35f518-1e50-49cb-94e8-94961ce4e824', 'f1db0672-5ee2-46da-bb31-d2f6fa14a1de', 120.00),
('151a8a80-6fc9-42f9-a92d-a64d5fe4418d', 'eced7403-cd79-4920-904d-7db413b7f43f', '7951569d-288a-4a58-aa49-9eedf7b2c28e', 30.00);

-- Ventas (actualizadas con nuevos precios)
INSERT INTO Sales (SaleId, CustomerId, UserId, Date, Total, PaymentMethod) VALUES 
('09290376-48ae-424e-988e-073023276ad0', '89a1998d-50bf-46e4-abcc-20ed0336c24f', '96ce2f1e-52a2-44bd-95aa-c9ef2c794b64', GETDATE(), 199.98, 'tarjeta'),
('5e356eb8-46ee-484b-8e20-710bb81e7d98', 'c278e071-9003-4dd0-88bf-5dadab951c31', '1fdd5781-9ae8-4951-b512-91d140925bb3', GETDATE(), 2999.97, 'efectivo'),
('56cb63fa-da20-4c68-ba4b-29370226f6ce', 'dda790c7-4f48-41ac-9ae9-1da58b6a954c', 'cfdb017c-3058-48a8-b4ac-19743de577bf', GETDATE(), 599.96, 'tarjeta'),
('d04b705d-70f3-41c3-a9b5-2eeb3075aa5f', 'be85be25-85c1-43b5-adc1-4095ea2774fb', 'a6e6e2af-9181-4a3d-a900-b89ddfa95812', GETDATE(), 149.95, 'efectivo'),
('bcd07e7d-a024-4459-ba88-5785cad45c05', '42169680-20cc-461a-80e5-ada6b62676d9', '7320e0b2-b75d-454b-84d8-5005044d5ed8', GETDATE(), 349.94, 'tarjeta');

-- Detalles de Ventas (actualizados)
INSERT INTO SaleDetails (SaleDetailId, SaleId, ProductId, Quantity, UnitPrice) VALUES 
('280902b5-f70c-4d59-a57c-13f31db98b8b', '5e356eb8-46ee-484b-8e20-710bb81e7d98', '889ad30a-0ee8-4152-b7b8-fc1ba90051f5', 3, 999.99),
('2e53c05e-75a6-40a9-aa79-a5f28f3de8c9', '56cb63fa-da20-4c68-ba4b-29370226f6ce', 'a53d882e-9eb4-47a5-b18d-6dbb391a820b', 2, 89.99),
('2e9cd982-8ec3-4e31-aadd-4d0b1cecfba1', 'd04b705d-70f3-41c3-a9b5-2eeb3075aa5f', '50402e31-758f-4a58-a862-47d00e1d01f3', 1, 299.99),
('a47ad384-3ca7-4582-a35d-cfe72dee8613', 'bcd07e7d-a024-4459-ba88-5785cad45c05', 'f1db0672-5ee2-46da-bb31-d2f6fa14a1de', 1, 199.99),
('e3e972b2-81b6-41d5-aae6-a15c71d57e6f', '09290376-48ae-424e-988e-073023276ad0', '7951569d-288a-4a58-aa49-9eedf7b2c28e', 4, 49.99);
