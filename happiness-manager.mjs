import fs from 'fs/promises';
import path from 'path';
import process from 'process';

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: node happiness-manager.mjs <guestDir> <outputFile>');
  process.exit(1);
}

const [guestDir, outputFile] = args;

try {
  const files = await fs.readdir(guestDir);
  const vips = [];
  
  for (const file of files) {
    if (!file.endsWith('.json')) continue;
    const filePath = path.join(guestDir, file);
    const content = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(content);
    if (data.answer === 'yes') {
      vips.push(data);
    }
  }

  if (vips.length === 0) {
    console.log('No one is coming.');
    process.exit(0);
  }

  const counts = {
    drinks: {
      'iced-tea': 0,
      'sparkling-water': 0,
      water: 0,
      soft: 0,
    },
    food: {
      vegan: 0,
      veggie: 0,
      carnivore: 0,
      fish: 0,
      everything: 0,
    },
    total: vips.length,
  };

  for (const vip of vips) {
    if (vip.drink && counts.drinks[vip.drink] !== undefined) {
      counts.drinks[vip.drink]++;
    }
    if (vip.food && counts.food[vip.food] !== undefined) {
      counts.food[vip.food]++;
    }
  }

  const shoppingList = { potatoes: counts.total };

  if (counts.drinks['iced-tea'] > 0) {
    shoppingList['iced-tea-bottles'] = Math.ceil(counts.drinks['iced-tea'] / 6);
  }
  if (counts.drinks['sparkling-water'] > 0) {
    shoppingList['sparkling-water-bottles'] = Math.ceil(counts.drinks['sparkling-water'] / 4);
  }
  if (counts.drinks.water > 0) {
    shoppingList['water-bottles'] = Math.ceil(counts.drinks.water / 4);
  }
  if (counts.drinks.soft > 0) {
    shoppingList['soft-bottles'] = Math.ceil(counts.drinks.soft / 4);
  }

  const vegTotal = counts.food.vegan + counts.food.veggie;
  if (vegTotal > 0) {
    const groups = Math.ceil(vegTotal / 3);
    shoppingList.eggplants = groups;
    shoppingList.courgettes = groups;
    shoppingList.mushrooms = groups * 3;
    shoppingList.hummus = groups;
  }

  if (counts.food.carnivore > 0) {
    shoppingList.burgers = counts.food.carnivore;
  }
  if (counts.food.fish > 0) {
    shoppingList.sardines = counts.food.fish;
  }
  if (counts.food.everything > 0) {
    shoppingList.kebabs = counts.food.everything;
  }

  let existingData = {};
  try {
    const existingContent = await fs.readFile(outputFile, 'utf8');
    existingData = JSON.parse(existingContent);
  } catch (err) {
    if (err.code !== 'ENOENT') throw err;
  }

  const mergedData = { ...existingData, ...shoppingList };
  await fs.writeFile(outputFile, JSON.stringify(mergedData, null, 2));
} catch (err) {
  console.error(err);
  process.exit(1);
}