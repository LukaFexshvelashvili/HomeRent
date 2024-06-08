import { openDB } from "idb";

const dbPromise = openDB("cache", 1, {
  upgrade(db) {
    db.createObjectStore("fetched-data");
  },
});

export const setCacheItem = async (key: string, value: any) => {
  const db = await dbPromise;
  return db.put("fetched-data", value, key);
};

export const getCacheItem = async (key: string) => {
  const db = await dbPromise;
  return db.get("fetched-data", key);
};

export const deleteCacheItem = async (key: string) => {
  const db = await dbPromise;
  return db.delete("fetched-data", key);
};

export const getLocalTime = () => {
  const now = new Date();
  return now.toLocaleString();
};

export function isDateLater(givenDateString: string, minutes: number) {
  const givenDate: any = new Date(givenDateString);
  const now: any = new Date();

  // Calculate the difference in milliseconds
  const difference = now - givenDate;

  // Convert minutes to milliseconds
  const minutesInMilliseconds = minutes * 60 * 1000;

  return difference > minutesInMilliseconds;
}

export function setSearchCache(url: string, fetch_data: any) {
  getCacheItem("search_fetch").then((res) => {
    if (res !== undefined) {
      let newRes = res.filter(
        (item: any) => item.search !== url && !isDateLater(item.date, 5)
      );
      newRes.unshift({ search: url, data: fetch_data, date: getLocalTime() });
      if (newRes.length > 10) {
        newRes.slice(0, 10);
      }
      setCacheItem("search_fetch", newRes);
    } else {
      setCacheItem("search_fetch", [
        { search: url, data: fetch_data, date: getLocalTime() },
      ]);
    }
  });
}
export async function getSearchCache(url: string) {
  let data = null;
  await getCacheItem("search_fetch").then((res) => {
    if (res !== undefined) {
      let cachedItem = res.filter(
        (item: any) => item.search === url && !isDateLater(item.date, 5)
      )[0];

      if (cachedItem !== undefined) {
        data = cachedItem.data;
      }
    }
  });
  return data;
}

export function setProductCache(id: string, fetch_data: any) {
  getCacheItem("product_fetch").then((res) => {
    if (res !== undefined) {
      let newRes = res.filter(
        (item: any) => item.id != id && !isDateLater(item.date, 10)
      );
      newRes.unshift({ id: id, data: fetch_data, date: getLocalTime() });
      if (newRes.length > 10) {
        newRes.slice(0, 10);
      }
      setCacheItem("product_fetch", newRes);
    } else {
      setCacheItem("product_fetch", [
        { id: id, data: fetch_data, date: getLocalTime() },
      ]);
    }
  });
}
export async function getProductCache(id: string) {
  let data = null;
  await getCacheItem("product_fetch").then((res) => {
    if (res !== undefined) {
      let cachedItem = res.filter(
        (item: any) => item.id == id && !isDateLater(item.date, 10)
      )[0];

      if (cachedItem !== undefined) {
        data = cachedItem.data;
      }
    }
  });
  return data;
}
