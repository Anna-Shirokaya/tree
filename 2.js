const fs = require('fs');

const folderPath = './2';

// Создаем папку только для чтения (права доступа: только для чтения для владельца и группы)
fs.mkdir(folderPath, { recursive: true, mode: 0o000 }, (err) => {
  if (err) {
    console.error('Ошибка при создании папки:', err);
    return;
  }
  console.log('Папка успешно создана только для чтения');
});