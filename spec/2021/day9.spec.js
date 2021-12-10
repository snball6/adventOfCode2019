describe("day9", () => {
    describe("Part 1", () => {
        it("should be able to check less than correctly_debugging", () => {

            expect(isLessThan('2', '5')).toBeTrue();
            expect(isLessThan('0', '5')).toBeTrue();
            expect(isLessThan('2', '9')).toBeTrue();
            expect(isLessThan('1', '3')).toBeTrue();
            expect(isLessThan('0', '0')).toBeFalse();
            expect(isLessThan('1', '1')).toBeFalse();
            expect(isLessThan('8', '2')).toBeFalse();
            expect(isLessThan('9', '0')).toBeFalse();
            expect(isLessThan('6', '5')).toBeFalse();
        });

        it("Should find lowestPoints_smaller", () => {
            let smaller = [
                '534',
                '513',
                '567'
            ]
            expect(findLowestPoints(smaller)).toEqual([1]);
        });

        it("Should find lowestPoints_sampleInput", () => {
            expect(findLowestPoints(sampleInput)).toEqual([1, 0, 5, 5]);
        });

        it("should calculate risk total_sampleInput", () => {
            expect(getRiskLevel(sampleInput)).toEqual(15);

        });

        it("should calculate risk total_puzzleInput", () => {
            expect(getRiskLevel(puzzleInput)).toEqual(566);

        });
    });

    describe("Part 2", () => {
        it("Should find lowestPointsLocations so I can find the basin around_sampleInput", () => {
            expect(findLowestPointsLocations(sampleInput)).toEqual([
                { value: 1, i: 0, j: 1 },
                { value: 0, i: 0, j: 9 },
                { value: 5, i: 2, j: 2 },
                { value: 5, i: 4, j: 6 }]);
        });

    });


    let sampleInput = [
        '2199943210',
        '3987894921',
        '9856789892',
        '8767896789',
        '9899965678'];

    let puzzleInput = [
        '3566789567953212679875689976651013679329876404568999884568910249798689921989789990134578923557899767',
        '2675895456894334598764999865432124567919995323789498765779991998654578899766678981245678912346789656',
        '1234996345789445679989899976543534678998999464569329876899989897643659789954569876456899101237891235',
        '0125679234579659789998789988754755889767898965678912987998976799532345689823678986567984352346932996',
        '2336798945689867894987679798768887998654967899889923498987654678990167899764789998988975443457899889',
        '3578987999795978932976589659879998999543456799999894989998543457789278999876799989699876595667989679',
        '4569876788954399999765479645990239998754899899998789878987632345678989998998999876543997989879876568',
        '5879854567894123989897568924921678919995799998999699869865421234589199997829899998732109878997654347',
        '6998642458963239876998779219793599939876789397689569654997642345691019875215689349883319768998765656',
        '8999843579654569765789899998689978899997899498534458932398543456789229764303478959765498757889876767',
        '9999954678975878974567989876568356789249988987621267891397686567898996543212367899889987645678988978',
        '9989975679986989893459878976421248993149877896532356953998789689946987755325456789998766436359999999',
        '8878989899998998782398967895310237789239966987646457969869898790123499869456567896987754321269898943',
        '7567892999889896531297656789431545678998755398758568979854949932334931998979878945796543210198787892',
        '6454693498766789320198967998698656899876534239878978998763238995449892397999989323987695423239676890',
        '4343989987655996431239998949898768998764321012989989679894346789598789986897993212398986734598545789',
        '4212467986434897545356999235979879899965432124994394567985456897679659875656899424999997865697434679',
        '4101347897323789657467892123467989799877656734789212378976569998796549864345678949898998986986523459',
        '3212356789595678998979999994999995678998867645678934989298678999987659764234567898757999297987534678',
        '4534598899989789999597898789878954579899998756889899891029789995499769872125679999545789398997645689',
        '5645678978978999897456987678969643499798789887998789789939899989998998761016989987678995499998756997',
        '9896789654769999785349876513457965987689678998997675689899999969877899843127898898789329986899987896',
        '5998996543457789654298765425578976798896567899876534996789998753766797654238987649899998795789898965',
        '4699764532345678979129986634989498899975489986987329894345987642345989765649898434999876534679799234',
        '2987643210156789998934899856892349987684349865696498789234596521235678996756789646798765423235678965',
        '0198654321789898997896798768950234998543298764987987676995789432345989987897999859987654210189899876',
        '1239968645678987986897899978931299897654399543499876545789997646559891098998964998999766323568998998',
        '5349898757989976545789934599892989789775987632989765434599898968698789989799765987899878545679357989',
        '7498789868998988637996549989789878678989898321976653223476789979899678975699879976678989857790239878',
        '9987668999987694329689998879679765457899765493495431012345991989998567994989998104589099767989998765',
        '9898556789876542104579897657567931266789879989987654223457892499876456789879876323679239899879899654',
        '8767347994987969223456789543459892345899998779898654336567954931964345698767965434589345999768698923',
        '7643245893299898999968897651669789456789987667799765559698969899986556789656987675689489987656567912',
        '9844156789349767987899998769898679667999876545687986798989999768987687896546798989797679876543458901',
        '9921078895497659876778999899987568978910987632456998987678989656798798998634569999898989987652345892',
        '8762135996569443124567899989876467899999798321269899976567878943899999798765678934999893298793456789',
        '9854345789998321012456998769765326798987654210198787898434569942996987659886789923598789109654567996',
        '8765656899876532126567899849954204567899965321987656789213467899785698543997896899976678998798778935',
        '9877897987987673234878912998765323478989896432398767896323456997654987685798945698964567929899899921',
        '6998998976898998549999899899976534889875796563569878975434567896543299876899434997853598919910979892',
        '4599659985449987678945798789987645678964897678978989876545678976431012997965429876212989998532356789',
        '6976545976232398789432987679898768789985679989999491987657789998679193999986210995304878987654898991',
        '9898679984101239894320976545789879991976899999789210199879997899798979893297399873213467898785789990',
        '9789798643212449965449865434599989210987999897698931249995676789987668789198989965325679949896899989',
        '8698987654323498979567997323478994391298987653567992398764545898976555678949979876566789923987989767',
        '7577898765434987698989986510567895989999989742455689999973136957965434599129864987898899812498977946',
        '4346569986565996567899965432456999979899976541234567893492012349994325989239753498999975701469765435',
        '3265455697679875456899876563567898767789876420125789932987324598989202678998542349899974212359889576',
        '2101234998798754347689989675678987645698765431345678921986434987578914568987321235799865343456998988',
        '3212649899899654236578998799789798534579876542767899510397675996467925679965430124678976659767987899',
        '5434598799987632125467899899897654325678998659878996421298789894348897789876576434679989898979876789',
        '6549987679876545012345999998989865456789999778989987692349898789256789896987797678999899987899765466',
        '7698896567987652123656789977678976567898789999097898989656989698967897995498949899878789875987654355',
        '9987623456799743245778898867545987878998678789156989878969768456998975789349421956965697654599776234',
        '8976512346987654356989987654434699989697547679345976967899654345789654248996532349876789523498765455',
        '7654401467999767467893398763123498798798534568959875656987865257899732056789945656987894312349876878',
        '8743212378999899879932109854012998679987323578998764345976772136678943167899896767898954201956987889',
        '9854434456799975989799349754129876598765435789999879109865321024599955389998797898949969319899998999',
        '8766789578999654394698959843298765439989546999899998913975453245689867899989689999439878498678999678',
        '9898997679998979213997899654349654323498757898789997929989964366795978939876579989923989987569897532',
        '9989698789987654339896798765798766437569968935679976798999878479894599123989468767894698675458789421',
        '9876549892398769498765689986789976545879879546989875787899996589965789094997398656789986436358679510',
        '9995434921239898998654787898997698976789989659899774656899987697976799989875234445698954321246578921',
        '9876545690123987987543456799434569989890199898798653245998698976897999877993101234567896210123467892',
        '0998766789439896987652345679323698999979988987649874067893569765798998966789245645798954321234679993',
        '1239977896598765798761457989212997897658767986534964249932469954319987845978966956789765543376896789',
        '3399798999977554569892567894109886997643457954323975957891398765434596534767897887990987754457895992',
        '4987669498765432498773459943298765789432129865434599878910129976545699721456998999321599865598999893',
        '5796442349874321987654767894998654598943019876545689989321234989686987632345679765452469876679999789',
        '9987321298985430199875678999876543497992124989656799997532346898787996543457799996569569987897987678',
        '8998532397654321234989789589987832986889434598779899898653457939998987668568899789998978998946986583',
        '6987545459865439356999892378998543965678945989989959789864579321019198789689947679876799999439875432',
        '4398756767987898967899943469998799864699659875697943679875689432329099898795433597997899988921994321',
        '9239767898998987898998764598799986543789769864756892467988789553458987969893212345698998777899876434',
        '8959879949799896999879876987697897674678998752245791345799899964567996546954323456789999656789989645',
        '7899989234698785878965998996546998865679219541024689859892999895679754323598435697999898743234698757',
        '6988995345987654667894319998434869986789997432123499767891298789798765434987646788948799865459789878',
        '5567976986896543456796101989322646987999876543234578979910989698999876545698757899235689879878999989',
        '3478987897989552367997429878910235698989989654345689989429878567899989856789898910149793999989989994',
        '1567898939878421058789698667921234569875298765468789996567968345689998767998999321998932349995678943',
        '2349899024965434145678999549892345789943129976578898987699854254678999879877898939897890198789789532',
        '3456789139877543234567987623789959898754434987689976498987643123567899998765687998786791987679894321',
        '4569999245999875655789876434567899979876795698990987689999784347889978987644676789675679896578943210',
        '5678968996789987767893987547698997667987896999891298799899895456789767696532345896563498765458964423',
        '6889345989892399889921297658999889543498999889789459898767976577997654595421476789412349876667896569',
        '7891239879901459998910198789998765432129998767678967987656988789986543987533469994201234988778999678',
        '8992398767899998767891239998769876821012987654569989993347899898998664596545678954354345999989998989',
        '9989499956798787656789399797654987732223498753878899982156789987899779997687899765998656789499987899',
        '9879989877998654545999987589543597654334989762657789876234999876789898798998939879879997892349876798',
        '9767678989876543236678998679421999776459875321045678985456789765689987659999123989768789943589865457',
        '9854589996998752134567899798939898997579986432123567996567998754579898767899934598757678998678974345',
        '9943499875689875238989989987898787989789996543456998998679996543466789878979899997644567898789996659',
        '9875679654579954346798776896989655878999999658567899989989989432345994999569787895432456789898789798',
        '6986998963298765497987545945678933356989898767688999879899876561235893212498656799501234568987679987',
        '5699776792129897679986534124569321239879789979799998965789864310126789423987545698912356899976567896',
        '6798645989012998798765421012789432398765678994921987654678986432645678999895435987894467899988678945',
        '7894534568999129899876532127689943498754567893210199875789987844576789988757329875789578967899989234',
        '8983213345678934987987844234567895976623456895332349876797898655687899876532012964678999356976590123',
        '9876501235799999765698977346788999875412346896546456997896919798798954987653329853568920239876321234',
        '8765432456789987543569765457899998765323467987656897998987909899899865699876598764689321298765432345'
    ];
});
