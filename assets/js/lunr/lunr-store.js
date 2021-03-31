var store = [{
        "title": "LolMiner 1.24a&#58; Скачать, Настройка и Команды [2021]",
        "excerpt":"               Все о LolMiner: Настройка для Максимальной Прибыли.          На этой странице описано, как начать майнинг с помощью lolMiner 1.24a и новее.   Скачать для Windows/Linux   Скачать релизы с GitHub   Скачать с BitcoinTalk   Настройка   Чтобы настроить батник нам нужно ввести три команды:           set \"POOL=eu1.ethermine.org:4444\" - указываем адрес пула   set \"WALLET=0x360d6f9efea21c82d341504366fd1c2eeea8fa9d.lolMinerWorker\" - указываем адрес кошелька и название фермы (любое)   lolMiner.exe --algo ETHASH --pool !POOL! --user !WALLET! timeout 10 - оставляем стандартную команду для запуска и алгоритм.   Так будет выглядеть батник lolminer для eth:   @echo off  setlocal enableDelayedExpansion  Rem ################################# Rem ## Begin of user-editable part ## Rem #################################  set \"POOL=eu1.ethermine.org:4444\" set \"WALLET=0x360d6f9efea21c82d341504366fd1c2eeea8fa9d.lolMinerWorker\"  Rem ################################# Rem ##  End of user-editable part  ## Rem #################################  lolMiner.exe --algo ETHASH --pool !POOL! --user !WALLET!  timeout 10   lolminer nicehash батник   lolMiner.exe --algo ETHASH --pool daggerhashimoto.eu-west.nicehash.com:3353 --user 3HHG3zpxP4AmbKDR9iRy1c2bqAb4WKhNwm.worker --tls 0 --ethstratum ETHV1 pause   Это второй, более легкий способ указать батник:        И расшифровка:           lolMiner.exe - имя программы, которая будет запущена   --algo ETHASH - название алгоритма   --pool daggerhashimoto.eu-west.nicehash.com:3353 - указываем адрес пула и его порт   --user 3HHG3zpxP4AmbKDR9iRy1c2bqAb4WKhNwm - указываем адрес кошелька от Найсхеш   .worker - после точки указываем имя воркера (любое название)   --tls 0 - указываем тип TLS (оставляем 0)   --ethstratum ETHV1 - указываем тип Стратум протокола   Готовый пример:   lolMiner.exe --algo ETHASH --pool daggerhashimoto.eu-west.nicehash.com:3353 --user 3HHG3zpxP4AmbKDR9iRy1c2bqAb4WKhNwm.worker --tls 0 --ethstratum ETHV1              \t \t \tВидео Гайд  \t \t \t \t \t \t \t \t \t \t подписывайтесь \t    Команды   Чтобы начать майнинг с помощью Лолмайнер нужно указать три вещи, а именно:      алгоритм для майнинга   адрес пула или соло-адрес для подключения   имя пользователя / кошелек для майнинга        Настройте алгоритм для майнинга   В lolMiner есть два способа указать алгоритм, который вы хотите майнить. Вам нужно выбрать один из них, чтобы начать майнинг.   Первый вариант - --algo (-a), за которым следует одно из следующих имен алгоритмов:                  BEAM-I       BeamHash I                 BEAM-II       BeamHash II                 BEAM-III       BeamHash III                 C29D       CuckarooD 29                 C29Z       CuckarooZ 29                 C30CTX       Cuckaroo 30 Cortex                 C31       Cuckatoo 31                 C32       Cuckatoo 32                 EQUI144_5       Equihash 144/5                 EQUI192_7       Equihash 192/7                 EQUI210_9       Equihash 210/9                 ZEL       ZelHash           Обратите внимание, что вы всегда можете узнать поддерживаемые алгоритмы с помощью команды: lolMiner --list-algos.  Также будет показан размер комиссии. Этот список проинформирует вас, поддерживает ли программа алгоритм / требуется ли параметр персонализации (--pers), который нужен для некоторых алгоритмов на основе Equihash.   Второй способ настройки lolMiner - через параметр --coin (-c) . Этот параметр устанавливает более подробные настройки для выбранных профилей и позволяет использовать специальные функции, например переключатели алгоритмов или комбинацию алгоритма с правильной персонализацией.   Подробный список дополнительных параметров lolMiner вы можете проверить с помощью командыlolMiner -h.   Требования к драйверам   Nvidia: Cuda 10 или 11   AMD:     Big Navi: amdgpu-pro 20.40 (Linux ) / Adrenaline 20.11.2 (Windows) и новее.   Navi: amdgpu-pro 19.30 (Linux) / Adrenaline 19.10.02 (Windows) и новее.   Vega: amdgpu-pro 18.50 (Linux) / Adrenaline 18.10 (Windows) и новее.   старые карты: драйверы Blockchain и новее.   Алгоритмы                  Алгоритм       Комиссия %                       BeamHash I       1.0                 BeamHash II       1.0                 BeamHash III       1.0                 Cuckoo 29       2.0                 CuckarooD 29       2.0                 CuckarooM 29       2.0                 Cuckaroo 30 CTXC       2.5                 Cuckatoo 31       2.0                 Cuckatoo 32       2.0                 Cuckaroo 29-32       1.0                 Cuckaroo 29-40       1.0                 Equihash 144/5       1.0                 Equihash 192/7       1.0                 Equihash 210/9       1.0                 Etchash       0.7                 Ethash       0.7                 ZelHash       1.0           ","categories": ["miners"],
        "tags": [],
        "url": "https://miningsoft.org/ru/miners/lolminer/",
        "teaser": "https://miningsoft.org/assets/images/thumbs/500x300.webp"
      },{
        "title": "SRBpolaris Bios Editor 3.5a&#58; Скачать, Настройка и Команды [2021]",
        "excerpt":"               Все о SRBPolaris: Как пользоваться, Как запустить.          На этой странице описано, как прошивать BIOs с помощью srbpolaris 3.5a и новее.   Скачать для Windows/Linux   Скачать релизы с GitHub   Скачать с BitcoinTalk   Официальный источник этого ПО - только GitHub!    Как пользоваться SRBPolaris  \t \t \t \t\tШаг 1 - Скачайте программу  \t\t \t\t \t\tОфициальные иточники для загрузки только: GitHub и форум автора программы -  BitcoinTalk. \t\t  \t\t \t \t \t \t \t\tШаг 2 - Настройте вольтаж  \t\t \t\t Если вы хотите понизить напряжение вашей карты или добавить дополнительную коррекцию  парамтера vdroop, вам нужно сделать еще одну вещь, и это изменить offset (смещение). Самый простой способ сделать это - открыть SRB Polaris v3.5, загрузить в него образ прошивки и щелкнуть вкладку «Напряжения» («Voltages»).    В левом нижнем углу вы увидите раскрывающееся окно, в котором вы можете выбрать offset. После выбора просто сохраните образ вашего БИОСа. Имейте в виду, что SRB Polaris имеет неприятную привычку автоматически вмешиваться в скорость и напряжение видеокарты, особенно с измененными образами прошивки, поэтому сохраните копию своей прошивки  и сравните их с PBE, чтобы «исправить» все, что SRB Polaris испортил.           \t\t \t \t \t \t \tШаг 3 - Сохраните BIOS  \t \t \t \tТеперь Вы успешно полностью модифицировали видеокарту Polaris и снизили напряжение. \t  \t \t  \t \t \tВидео Гид  \t \t \t \t \t \t \t \t \t \t подписывайтесь \t     SRBPolaris не запускается?   Для работы программы нужен .NET Framework 3.5 (включает .NET 2.0 и 3.0)   Установите его:        Вы увидите установщик Windows:        Нужно подождать около 5-10 мин. Плсде чего вы увидите следующее окно:        ","categories": ["miners"],
        "tags": [],
        "url": "https://miningsoft.org/ru/miners/srbpolaris/",
        "teaser": "https://miningsoft.org/assets/images/thumbs/500x300.webp"
      },{
        "title": "Gminer 2.47&#58; Скачать, Настройка для ETH, Github, Binance",
        "excerpt":"               Все о Gminer: Настройка для ETH, Binance пул и многое другое.          На этой странице описано, как начать майнинг с помощью Gminer 2.47 и новее.   Скачать для Windows/Linux   Скачать релизы с GitHub   Скачать с BitcoinTalk    Как настроить Gminer  \t \t \t \t\tШаг 1 - Скачайте майнер  \t\t \t\t \t\tВыберите себе релиз для загрузки: официальный GitHub репозиторий или воспользуйтесь форумом BitcoinTalk. \t\t  \t\t \t \t \t \t \t\tШаг 2 - Настройте батник  \t\t \t\t \t\tНа примере binance pool батник будет выглядеть вот так: \t \t\t \t\t\tminer.exe --algo ethash --server ethash.poolbinance.com:8888 --user username1          \t \t\t \t\t \t \t \t \t \tШаг 3 - Запустите майнер  \t \t \t \tТеперь сохраните этот файл с расширением .bat и запустите его двойным щелчком мыши. \t  \t \t  \t \t \tВидео Гид  \t \t \t \t \t \t \t \t \t \t подписывайтесь \t     Настройка   Чтобы настроить батник нам нужно поочередно ввести 5 команд:           miner.exe - имя запускаемой программы. Этот файл должен находиться в той же папке, что и сам батник.   ethash - указываем алгоиртм для майнинга.   ethash.poolbinance.com - указываем пул. В данном примере используется Бинанс Пул. Читайте: как майнить на Binance Pool   8888 - указываем порт от пула. Его можно найти там же, где и адрес пула.   username1 - рросто измените username1 на ваше имя аккаунта от Бинанс.   Так будет выглядеть батник Gminer для eth:   miner.exe --algo ethash --server ethash.poolbinance.com:8888 --user username1    NiceHash настройка Gminer   Для найсхеш батник будет вот таким:        И расшифровка:           kawpow - указываем алгоритм майнинга   kawpow.eu-west.nicehash.com - указываем сервер   3385 - пишем порт   3LZhp4g3m7YWqR4hAPrZsKWbyo7hRBmqvy - и кошелек. Важно! Для майнинга на найсхеш нужно указывать BTC кошелек, а не той монеты, которую вы майните.   Готовый пример:   miner.exe --algo kawpow --server kawpow.eu-west.nicehash.com:3385 --user 3LZhp4g3m7YWqR4hAPrZsKWbyo7hRBmqvy   Команды   --algo или короткий синоним этой команды -a - указывает алгоритм для майнинга (для примера: ‘ethash’, ‘kawpow’, ‘cuckatoo32’, ‘beamhash’)  --list_devices - отобразить список доступных устройств для майнинга  ","categories": ["miners"],
        "tags": [],
        "url": "https://miningsoft.org/ru/miners/gminer/",
        "teaser": "https://miningsoft.org/assets/images/thumbs/500x300.webp"
      },{
        "title": "TeamRedMiner 0.8.0&#58; Скачать, Настройка для ETH,",
        "excerpt":"               TeamRedMiner: Настройка для ETH, Команды, примеры для (ETH, RVN) и многое другое.          В этом руководстве вы узнаете, как настроить и использовать программное обеспечение TeamRedMiner для майнинга криптовалют   Скачать для Windows/Linux   Скачать релизы с GitHub   Скачать с BitcoinTalk       Что такое TeamRedMiner     TeamRedMiner - это программное обеспечение исключительно для майнинга на AMD, разработанное программистами с никами Todxx и Kerney666.     Это программное обеспечение может добывать такие криптовалюты, как Ethereum, Ravencoin, Grin, Zcoin и другие.     Это программа для командной строки. Это означает, что вы запускаете его либо из командной строки Windows, либо из консоли Linux, либо создаете ярлыки для предопределенных командных строк с помощью сценария Linux Bash или командного (.bat) файла Windows.      Как настроить TeamRedMiner  \t \t \t \t\tШаг 1 - Скачайте майнер  \t\t \t\t \t\tВо-первых, вам необходимо загрузить программное обеспечение по этой GitHub ссылке. Убедитесь, что вы выбрали правильный файл для своей ОС. Если у вас Linux, скачайте файл в формате.tar.gz, если у вас Windows, скачайте файл в формате .zip. \t\t  \t\t \t \t \t \t \t\tШаг 2 - Настройте батник для Эфириума  \t\t \t\t \t\tВам нужно выбрать правильный файл сценария (батник) в зависимости от алгоритма, который вы хотите использовать для майнинга. На примере binance pool .bat файл будет выглядеть следующим образом: \t\t\t \t\t\tteamredminer.exe -a ethash -o stratum+tcp://ethash.poolbinance.com:8888 -u username1.worker_name -p x \t\t\t\t\t\t\t\t\t\t\t\t\t\t \t\t \t\t \t \t \t \t \tШаг 3 - Запустите ТимРедМайнер  \t \t \t \tОтредактируйте этот файл (замените название аккаунта username1 на имя вашего аккаунта). Вы так же можете изменить и URL-адрес майнинга, т.е. выбрать другой пул. После этого сохраните как пакетный файл -.bat - если вы работаете в Windows или как файл bash - .sh - если вы работаете в Linux. \t  \t \t  \t \t \tВидео Гид  \t \t \t \t \t \t \t \t \t \t подписывайтесь \t     ТимРедМайнер настройка для Эфира      Адрес пула (-o) stratum+tcp://eu1.ethermine.org   Порт: 4444   Кошелек (-u) Wallet address   Пароль или название фермы Worker Password     Чтобы настроить батник для ETH нам нужно поочередно ввести 6 команд:           teamredminer.exe - имя программы, которая запустится. Учтите, что сам батник должен находиться в той же папке, что и сама программа   -a ethash - после ключа -a мы указываем алгоритм для майнинга. В этом примере ЭФир, поэтому указан ethash   -o stratum+tcp://eu1.ethermine.org - указываем адрес пула. В этом примере использован ethermine.   :4444 - после двоеточия указываем порт пула. У ethermine он 4444.   -u 0x0c19EfE277b4e64f26c93b3a48A26EeD310421c8 - после -u мы пишем адрес своего кошелька на который будет идти майнинг.   .trmtest - указываем после точки имя воркера. Можно указать любое. Он нужен для названия фермы, кода вы будете отслеживать статистику на пуле.   Так будет выглядеть батник TeamRedMiner для eth на пуле ethermine:   teamredminer.exe -a ethash -o stratum+tcp://eu1.ethermine.org:4444 -u 0x0c19EfE277b4e64f26c93b3a48A26EeD310421c8.trmtest -p x   TeamRedMiner настройка для NiceHash   Вот батник для НайсХеш:   teamredminer.exe -a kawpow -o stratum+tcp://kawpow.eu.nicehash.com:3385 -u 3LZhp4g3m7YWqR4hAPrZsKWbyo7hRBmqvy.trmtest -p x        Это пример для RVN:           kawpow - указываем алгоритм майнинга. В данном случае Ravencoin   kawpow.eu-west.nicehash.com - указываем сервер пула для найсхэш   3385 - пишем порт от пула   3LZhp4g3m7YWqR4hAPrZsKWbyo7hRBmqvy - и кошелек. Важно! Для майнинга на найсхеш нужно указывать Ваш BTC кошелек, а не той монеты, которую вы майните.   Готовый пример:   teamredminer.exe -a kawpow -o stratum+tcp://kawpow.eu.nicehash.com:3385 -u 3LZhp4g3m7YWqR4hAPrZsKWbyo7hRBmqvy.trmtest -p x    Алгоритмы и комиссии                  Algorithm       Fee                       Ethash on Polaris GPUs       0.75%                 Ethash on all other GPUs       1.0%                 Kawpow       2.0%                 Nimiq       2.5%                 Cryptonight R       2.5%                 Cryptonight v8 upx2       2.5%                 Cryptonight v8 turtle       2.5%                 Cryptonight v8 half       2.5%                 Cryptonight v8 double       2.5%                 Cryptonight v8 rwz       2.5%                 Cryptonight v8       2.5%                 Cryptonight heavy       2.5%                 Cryptonight haven       2.5%                 Cryptonight saber       2.5%                 Cryptonight conceal       2.5%                 Chukwa-512 (Turtlecoin)       2.5%                 Chukwa-1024 (Turtlecoin)       2.5%                 x16r       2.5%                 x16rv2       2.5%                 x16s       2.5%                 x16rt       2.5%                 MTP       2.5%                 Cuckatoo31       2.5%                 Cuckarood29       2.5%                 Lyra2rev3       2.5%                 Lyra2z       3.0%                 Phi2       3.0%           Команды   --algo или короткий синоним этой команды -a - указывает алгоритм для майнинга (для примера: ‘ethash’, ‘kawpow’, ‘cuckatoo32’, ‘beamhash’)   Важно! Используйте либо длинный синоним --algo либо короткий -a. Вместе и то и то использовать не нужно.   -h, --help - отобразить справочную информацию и выйти  ","categories": ["miners"],
        "tags": [],
        "url": "https://miningsoft.org/ru/miners/teamredminer/",
        "teaser": "https://miningsoft.org/assets/images/thumbs/500x300.webp"
      },{
        "title": "Xzc Mtp Ccminer (x64 2.2)&#58; Скачать, Настройка, Запуск (2021)",
        "excerpt":"               CCMiner: Настройка для FIRO, Команды, примеры для (MTP, XZC) и многое другое.          В этом руководстве вы узнаете, как настроить и использовать CCMiner для майнинга Firo   Скачать для Windows/Linux   Скачать релизы с GitHub   Скачать с BitcoinTalk       Что такое CCMiner     CCMiner - это программа для майнинга FIRO (MTP) и других криптовалют. Программа работает в Windows и Linux.     Как настроить CCMiner  \t \t \t \t\tШаг 1 - Скачайте майнер  \t\t \t\t \t\tЗагрузите или распакуйте исполняемый файл в папку по вашему выбору. Для XZC MTP (Firo) скачать можно по этой GitHub ссылке. Убедитесь, что вы выбрали правильный файл для своей ОС. Если у вас Windows, скачайте файл ccminer_cuda11, если у вас Linux, скачайте файл ccminer_linux_cuda100 \t\t   \t\t  \t\t \t \t \t \t \t\tШаг 2 - Настройте батник для Firo  \t\t \t\t \t\tWalletAddress должен быть изменен на ваш адрес, который можно найти в вашем кошельке ZCoin либо на вашей бирже криптовалют.  Вот мой .bat-файл с использованием ccminer и пула 2Miners:  \t\t\tccminer -a mtp -o  stratum+tcp://xzc.2miners.com:8080  -u  aMLjCeLBmBGEJP6dYtWEMdZZuPH4w6uFsK -p 0  pause \t\t\t \t\t \t\t \t \t \t \t \tШаг 3 - Запустите CCMiner  \t \t \t \tСохраните ваш .bat файл в той же папке, в которую вы извлекли программу для майнинга. Затем дважды щелкните по нему, чтобы запустить майнер. Откроется окно cmd, показывающее вам статус майнинга, и через несколько минут вы должны увидеть, что ваши решения приняты майнинг-пулом. \t  \t \t  \t \t \tВидео Гид  \t \t \t \t \t \t \t \t \t \t подписывайтесь \t     Пример CCMiner для mtp zcoin      STRATUM: stratum+tcp://xzc.2miners.com   PORT: 8080   Username: aMLjCeLBmBGEJP6dYtWEMdZZuPH4w6uFsK   Password: 0     Так будет выглядеть батник CCMiner для Firo на пуле 2miners:        Чтобы настроить батник для MTP нам нужно поочередно ввести 4 команды:           mtp - указываем алгоритм   xzc.2miners.com - указываем пул   8080 - указываем порт пула   aMLjCeLBmBGEJP6dYtWEMdZZuPH4w6uFsK - указываем кошелек   Так будет выглядеть готовый батник CCMiner:   ccminer -a mtp -o  stratum+tcp://xzc.2miners.com:8080  -u  aMLjCeLBmBGEJP6dYtWEMdZZuPH4w6uFsK -p 0   pause   CCMiner настройка для NiceHash   Вот батник для НайсХеш:   ccminer -a lyra2z -o stratum+tcp://lyra2z.eu-west.nicehash.com:3365 -u 3LZhp4g3m7YWqR4hAPrZsKWbyo7hRBmqvy -p 0  pause   Алгоритмы                  Алгоритм       Монета                       blake       Blake 256 (SFR)                 mtp       Zcoin (Firo)             Команды   --algo или короткий синоним этой команды -a - указывает алгоритм для майнинга (для примера: ‘mtp’, ‘lyra2Z’, ‘scrypt’, ‘myr-gr’)   Важно! Используйте либо длинный синоним --algo либо короткий -a. Вместе и то и то использовать не нужно.   ","categories": ["miners"],
        "tags": [],
        "url": "https://miningsoft.org/ru/miners/ccminer/",
        "teaser": "https://miningsoft.org/assets/images/thumbs/500x300.webp"
      },{
        "title": "NBMiner 37.1&#58; Настройки для Binance, Скачать, Команды (2021)",
        "excerpt":"               NBMiner: Настройка для Binance Pool, Комиссия, Сравнение с Phoenix.          В этом руководстве вы узнаете, как настроить и использовать NBMiner для майнинга KawPow и Ethereum   Скачать для Windows/Linux   Скачать релизы с GitHub   Скачать с BitcoinTalk       Что такое NBMiner     NBMiner - это программное обеспечение для майнинга на видеокарте (GPU). Работает только картах NVIDIA и AMD.     Как настроить NBMiner  \t \t \t \t\tШаг 1 - Скачайте майнер  \t\t \t\t \t\t Скачайте программу NBminer, распакуйте ее в отдельную папку и найдите start.bat.  \t\t   \t\t  \t\t \t \t \t \t \t\tШаг 2 - Настройте батник для KawPow  \t\t \t\t \t\tОткройте файл start.bat с помощью Notepad++ или любого подходящего текстового редактора и  отредактируйте файл:  Вот пример .bat-файла NBMiner для пула Beepool (Ravencoin):  \t\tnbminer -a kawpow -o rvn-pool.beepool.org:9531 -u RAXCRKF2JdYwYLn2RiMxDPNgvKMwfVrjY9 pause \t\t \t\t \t\t \t \t \t \t \tШаг 3 - Запустите NBMiner  \t \t \t \tСохраните этот файл и затем дважды щелкните start.bat, чтобы начать майнинг. Когда в окне CMD отображается слово «Accept» («Принято»), это означает, что вы успешно отправили свое решение в пул.  \t  \t \t  \t \t \tВидео Гид  \t \t \t \t \t \t \t \t \t \t подписывайтесь \t     Пример NBMiner для Binance Pool      STRATUM: ethproxy+tcp://ethash.poolbinance.com   PORT: 8888   Username: username1   Password: default     Так будет выглядеть батник NBMiner для ETH на пуле Binance Pool:        Чтобы настроить батник для MTP нам нужно поочередно ввести 5 команд:           nbminer - имя запускаемой напи мирограммы   ethash - алгоритм для майнинга   ethash.poolbinance.com - адрес пула   8888 - порт пула   username1 - имя пользователя от майнинг аккаунта на бирже.   Так будет выглядеть готовый батник NBMiner:   nbminer -a ethash -o ethproxy+tcp://ethash.poolbinance.com:8888 -u username1.default -log   NBMiner настройка для NiceHash   Вот батник для НайсХеш:   nbminer -a kawpow -o stratum+tcp://kawpow.eu.nicehash.com:3385 -u 3LZhp4g3m7YWqR4hAPrZsKWbyo7hRBmqvy.nbminer -log pause   Мониторинг и прибыль   После того, как майнер стабилизируется примерно на 10-15 минут, вы можете проверить статус работы и прибыль на странице « Доходы» в аккаунте на бирже или на том пуле, который вы выбрали.   Алгоритмы и хешрейт                  Алгоритм       Монета       P106-100       P104-8G       1070ti       1080ti       2080       RX580 2048sp                       ethash       ETH       21.2M       34.5M       26.9M       46M       35.5M       24M                 cuckatoo       GRIN31       X       0.89       0.94       1.56       1.65       X                 cuckatoo32       GRIN32       0.215       0.38       0.41       0.63       0.65       X                 cuckoo_ae       AE       3.35       5.5       5.15       7.9       8.75       X                 progpow_sero       SERO       10.3M       17.5M       13.3M       22.5M       25.8M       10M                 kawpow       RVN       10.3M       17.5M       13.3M       22.5M       25.8M       11M                 beamv3       BEAM       12.5       19.6       19.5       26       30.5       X                 octopus       CFX       5.5M       8.5M       9.8M       14.8M       48.5M       X                 ergo       ERGO       41M       67M       52M       63M       73M       X               Сравнение NBMiner vs PhoenixMiner          подписывайтесь   Команды   --algo или короткий синоним этой команды -a - указывает алгоритм для майнинга (для примера: ‘mtp’, ‘lyra2Z’, ‘scrypt’, ‘myr-gr’)   Важно! Используйте либо длинный синоним --algo либо короткий -a. Вместе и то и то использовать не нужно.   Далее команды будут указаны через запятую. Сначала короткий синоним, а затем длинны. Помните, что нужно использовать только один вариант.   -v, --version    - Отобразить версию и выйти.   -c, --config \\&lt;config file path&gt;  -  Использовать конфиг в формате JSON вместо батника (CMD файла).   ","categories": ["miners"],
        "tags": [],
        "url": "https://miningsoft.org/ru/miners/nbminer/",
        "teaser": "https://miningsoft.org/assets/images/thumbs/500x300.webp"
      },{
        "title": "Wildrig Multi Miner (0.28.3)&#58; Настройка для Windows [2021]",
        "excerpt":"               Wildrig: Настройка для майнинга, Алгоритмы и Конфигурация.          В этом руководстве вы узнаете, как настроить и использовать Wildrig для майнинга KawPow   Скачать для Windows/Linux   Скачать релизы с GitHub   Скачать с BitcoinTalk       Что такое Wildrig     Wildrig - это программа для майнинга криптовалют, поддерживающая большое количество алгоритмов, включая менее популярные алгоритмы майнинга. Работает с AMD, начиная с серии R200 и Nvidia.     Комиссия майнера составляет 1%.     Как настроить Wildrig  \t \t \t \t\tШаг 1 - Скачайте майнер  \t\t \t\t \t\t Скачайие Wildrig.  \t\tПрограммное обеспечение для майнинга запускается через командную строку в Linux и через файл .bat в Windows. Ниже приведены примеры bat файлов для каждой криптовалюты, которую вы можете добывать с помощью Wildrig-Multi.  \t\t   \t\t  \t\t \t \t \t \t \t\tШаг 2 - Настройте батник для KawPow  \t\t \t\t \t\tОбязательно замените YOUR_ADDRESS на адрес своего кошелька. RIG_ID замените на собственное имя вашей фермы. Вы можете называть ферму как угодно, но имя должно содержать только латинские буквы и символы «-» и «_». Кошелек должен соответствовать криптовалюте, которую вы добываете.  Пример .bat-файла Wildrig для пула Beepool (Ravencoin):  wildrig.exe --print-full --algo kawpow --url stratum+tcp://rvn-pool.beepool.org:9531 --worker RIG_ID --user RKAeArXkWLNERjWo5YF3R1xFnYCwKf11sX --pass x pause  \t\t \t\t \t \t \t \t \tШаг 3 - Запустите Wildrig  \t \t \t \tСохраните данный батник и впоследствии щелкните start.bat, дабы запустить майнинг. \t  \t \t  \t \t \tВидео Гид  \t \t \t \t \t \t \t \t \t \t подписывайтесь \t     Пример Wildrig для Firo (Zcoin)      STRATUM: stratum+tcp://xzc.2miners.com   PORT: 8080   Username (кошелек): aMLjCeLBmBGEJP6dYtWEMdZZuPH4w6uFsK    Password: x     Так будет выглядеть готовый батник Wildrig для Firo (Zcoin):   wildrig.exe --print-full --algo mtp --url stratum+tcp://xzc.2miners.com:8080 --worker RIG_ID --user aMLjCeLBmBGEJP6dYtWEMdZZuPH4w6uFsK --pass x pause   Так будет выглядеть батник WildRig для Ravencoin на пуле Beepool:        Чтобы настроить батник для KAWPOW нам нужно поочередно ввести 5 команд:           wildrig.exe - имя запускаемой напи мирограммы   kawpow - алгоритм для майнинга   rvn-pool.beepool.org:9531 - адрес пула и порт   RKAeArXkWLNERjWo5YF3R1xFnYCwKf11sX - кошелек на который будет идти майнинг.   Wildrig настройка для NiceHash   Вот батник для НайсХеш:   wildrig.exe --print-full --algo kawpow --url stratum+tcp://kawpow.eu-west.nicehash.com:3385 --worker RIG_ID --user 3LZhp4g3m7YWqR4hAPrZsKWbyo7hRBmqvy --pass x pause   Алгоритмы      aergo, anime   bcd, bitcore, blake2b-btcc, blake2b-glt, blake2s, bmw512   c11   dedal   exosis   geek, glt-astralhash, glt-globalhash, glt-jeonghash, glt-padihash, glt-pawelhash   hex, hmq1725, honeycomb   kawpow   lyra2tdc, lyra2v2, lyra2v3, lyra2vc0ban   mtp, mtp-tcr   nist5   phi, polytimos, progpowz, progpow-ethercore, progpow-sero   quark, quibit   renesis   sha256, sha256csm, sha256d, sha256q, sha256t, skein2, skunkhash, sonoa   timetravel, tribus   wildkeccak   x11, x12, x13, x14, x15, x16r, x16rv2, x16s, x17, x17,r x18, x20r, x21i, x21s, x25x, xevan   Команды   --algo или короткий синоним этой команды -a - указывает алгоритм для майнинга (для примера: ‘mtp’, ‘lyra2Z’, ‘scrypt’, ‘myr-gr’)   Важно! Используйте либо длинный синоним --algo либо короткий -a. Вместе и то и то использовать не нужно.   Далее команды будут указаны через запятую. Сначала короткий синоним, а затем длинны. Помните, что нужно использовать только один вариант.   -v, --version    - Отобразить версию и выйти.   -c, --config \\&lt;config file path&gt;  -  Использовать конфиг в формате JSON вместо батника (CMD файла).  ","categories": ["miners"],
        "tags": [],
        "url": "https://miningsoft.org/ru/miners/wildrig/",
        "teaser": "https://miningsoft.org/assets/images/thumbs/500x300.webp"
      },]
