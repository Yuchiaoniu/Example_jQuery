from bs4 import BeautifulSoup
import requests
import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from array import *

path = 'global\python\chromedriver.exe'


# 不開網頁搜尋
# option = webdriver.ChromeOptions()
# option.add_argument("headless")
# driver = webdriver.Chrome(path, chrome_options=option)
# 開網頁搜尋
driver = webdriver.Chrome(path)
options = webdriver.ChromeOptions()
options.add_experimental_option("detach", True)
driver = webdriver.Chrome(chrome_options=options,
                          executable_path=r'global\python\chromedriver.exe')
# 開啟百度並搜素selenium
driver.get("https://www.baidu.com/sf/vsearch?wd=%E6%B5%B7%E4%BC%A6%E5%85%AC%E5%BC%8F&pd=video&tn=vsearch&lid=b6b8144e000a6721&ie=utf-8&rsv_spt=4&rsv_bp=1&f=8&oq=%25E6%25B5%25B7%25E4%25BC%25A6%25E5%2585%25AC%25E5%25BC%258F&rsv_pq=b6b8144e000a6721&rsv_t=d505ziC7xKWO9xt%252FlhESJkYl7bK7gSEyls%252B6B2XIkT5N%252BY0ZwDvHnCg1WjkRSA")

soup = BeautifulSoup(driver.page_source, "html.parser")
array_for_href = []
titles = soup.find_all('a', {
    'class': 'video-title'})
for title in titles:
    hrefs = title.attrs['href']

    # array_for_href.append(href)

    print(type(array_for_href))
