(this.webpackJsonpbattleship=this.webpackJsonpbattleship||[]).push([[0],{20:function(A,e,t){},27:function(A,e,t){"use strict";t.r(e);var n=t(2),r=t.n(n),c=t(14),a=t.n(c),s=(t(20),t(3)),i=t(5),u=function(A,e,t){var n=[],r=!1,c=[],a=function(){return n},s=function(){return c};function u(){a().length===A&&(r=!0)}!function(){for(var n=[],r=0;r<A;r+=1)"down"===e&&n.push([t[0],t[1]-r]),"across"===e&&n.push([t[0]+r,t[1]]);c=n}();return{getSquares:s,getHits:a,getSunk:function(){return r},hit:function(A){var e,t=function(A){return s().filter((function(e){return e[0]===A[0]&&e[1]===A[1]}))}(A);0!==t.length&&(e=[].concat(Object(i.a)(a()),[t[0]]),n=e,u())},isSunk:u}},d=t(4),o=t(12),l=t.n(o),g=t(0);var b=function(A){var e=A.xCoord,t=A.yCoord,n=A.handleClick,r=A.children,c=A.setupDone,a=A.hoverGuide,s=A.squareClass,i=A.innerClass;return Object(g.jsx)("div",{className:s,onClick:function(A){n([e,t],A.target)},onMouseEnter:function(){c||a([e,t])},children:Object(g.jsx)("div",{className:i+" innerSquare",children:r})})},j=t(15),v=t.p+"static/media/dead.bb83fa0a.png";var f,h,O,m,z=function(A){var e=A.grid,t=A.human,n=A.hovered,r=void 0===n?[]:n,c=A.handleClick,a=A.setupDone,s=A.hoverGuide,u=A.sunkSquares,o=void 0===u?[]:u,f=A.activeSquares;console.log("Board rendered");var h=e.map((function(A,e){var n=Object(i.a)(A).reverse();return Object(g.jsx)("div",{className:"column",children:n.map((function(A,i){var u="square",h="",O="",m=e,z=n.length-i-1;t&&Object(d.isInteger)(A)&&(O="ship",u+=" ship"),"h"===A&&(O="water"),"sh"===A&&(O="fire",u+=" hit");var p=r.filter((function(A){return Object(d.isEqual)(A,[m,z])})),w=o.filter((function(A){return Object(d.isEqual)(A,[m,z])}));return 0!==p.length&&(u+=" hovered"),0!==w.length&&(O="dead",u+=" dead"),1===Object(d.intersectionWith)(f,[[m,z]],d.isEqual).length&&("h"===A&&(h+=" clickMiss"),"sh"===A&&(h+=" clickHit")),Object(g.jsx)(b,{xCoord:m,yCoord:z,handleClick:c,squareClass:u,human:t,setupDone:a,hoverGuide:s,icon:O,innerClass:h,children:"ship"===O?Object(g.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAEAQAAAAO4cAyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQflCgEXHjpzdQzNAAAdwUlEQVR42u3dXbBdZXkH8Oc9ECyCASsRlGrRadEmQjNAKVTHj2oY2mAHL9oypWI7YhztBXamrTdetOONjsMAdWILBmwUREWMGrDkYwTlQ2lgIgiBKoYIEkKixJAvSE7204tNGsB8nr3Pedfa6/ebyUzIkJP/++691/us92PtCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGiIzNmzcxC9lStrtwGabKx2AIC9+8AHBvrrZeHC2i0AAA5B9qZNy1y/fuK3/zt2ZG/GjNrtAAAOQeb55w80/Z+LFtVuAzSdJQCggQac/g/T/wDQKtmbMSNzx46J3/2vX5+9adNqtwOazgwA0CzlwgsjBhnAr7uujO3cWbsZAMAhyN7KlYOt/8+eXbsNAMAhcPYfpo4lAKBBnP0HgE5x9h8AOsjZf5halgCAhnD2HwA6xdl/mHpmAID6nP0HgO5x9h+mXqkdADh4mbNmRVx8ccScOZEnnRTlqKNqZ+q03Lo1ypo1kUuXRlmwoJRVq2pHAmCEZO+IIzI/+9nM8fHB7pSZPOPjmVdcYS8CbWEGABoue0ccEXHzzVHe857aWTgIuWxZxNy59iTQdDYBQtOVSy81+LdImTMnymc+UzsGHIgZAGiw/pr/ffdFHHZY7SwcivHxiFNPLeWhh2ongX0xAwCN9qEPGfzb6PDDIy++uHYK2B8FADTanDm1EzBB5ZxzakeA/bEEAA2WuXlzxNFH187BRGzeXMr06bVTwL6YAYBGy6ydgIny2tFsCgBotMceq52AifLa0WwKAGiyXLq0dgQmKG+5pXYE2B97AKDBMmfOjLj/ficB2mZ8POKUU0p5+OHaSWBfzABAg/WfLT9/fu0cHKL87GcN/jSdGQBouP6z5W++OYojge2wdGnkeed5FDBNZwYAGq4/kMydG3HFFf2pZZppfDzysssM/rSFGQBokcyZMyM/+MH+Q2ZOOskzAmrbsiVizZrIJUuiXH21R/8CwEtkzp490Lft9laurN0GGCWWAIAp8oEPDPTXy8KFtVsAAByC7E2blrl+/cRv/3fsyN6MGbXbAQAcgszzzx9o+j8XLardBhg1lgCAKTDg9H+Y/geAVsnejBmZO3ZM/O5//fr+sxCAYTIDAEyucuGFEYMM4Ndd51w9ALRM9lauHGz9f/bs2m0AAA6Bs//QXJYAgEnk7D8AdIqz/wDQQc7+Q7NZAgAmibP/ANApzv5D85kBAIbP2X8A6B5n/wGgY5z9h3awBAAMmbP/ANApzv4DQAc5+w/tYQkAGCJn/wGgU5z9h3YxAwAMh7P/ANA9zv4DQMc4+w/tYwkAGAJn/wGgU5z9B4AOcvYf2skSADAgZ/8BoFOc/Yf2MgMATJyz/wDQPc7+Q3uV2gGgTTJnzYq4+OKIOXMiTzopylFH1c5Eg+XWrVHWrIlcujTKggWlrFpVOxLspgCAg5C9I46IcumlER/5SMRhh9XOQxvt2hUxf37kP/2TZQ+aQAEAB5C9I46IuPnmKO95T+0sjIBctixi7lxFALXZBAgHUi691ODP0JQ5c6J85jO1Y4AZANiP/pr/ffeZ9me4xscjTj21lIceqp2E7jIDAPv1oQ8Z/Bm+ww+PvPji2inoNgUA7NecObUTMKLKOefUjkC3WQKA/cjcvDni6KNr52AUbd5cyvTptVPQXWYAYL8yaydgVHlvUZcCAPbrscdqJ2BUeW9RlwIA9ieXLq0dgRGVt9xSOwLdZg8A7EfmzJkR99/vJADDNT4eccoppTz8cO0kdJcZANiP/rPb58+vnYMRk5/9rMGf2swAwAH0v6/+5pujOBLIMCxdGnneeR4FTG1mAOAA+hfquXMjrriiP3ULEzE+HnnZZQZ/msIMAByCzJkzIz/4wf5DXE46yTMC2L8tWyLWrIlcsiTK1Vd79C8ArZE5e3YOordyZe02AL/JEgBwAB/4wEB/vSxcWLsFAMAhyN60aZnr10/89n/HjuzNmFG7HQDAIcg8//yBpv9z0aLabQD2zhIAsB8DTv+H6X8AaJXszZiRuWPHxO/+16/vP0MBaCIzAMDelQsvjBhkAL/uOufdAaBlsrdy5WDr/7Nn124DAHAInP2H0WcJANgLZ/8BoFOc/QeADnL2H7rBEgDwEs7+A0CnOPsP3WEGANjD2X8A6B5n/6E7Dq8dAGiG/uA9wACeP/pRGfvRj2q3g6mTmVk7Q02llFI7wyAsAQDPc/YfuqTV1QswHNmbNi3KE09ETPT8/s6dkSeeWMY2bKjdFqaOGQAzAEDblblzJz74R0TcfLPBH9pFAQCEs//QPa2evgAGl70ZM/rT/xM9/rdhQ3/63/G/rrEEYAkAaDNn/6GTFADQdWn6H7pIAQAdljl7dpQBz/4XZ/+hjRQA0GnO/kNXtXoDAzBxzv4zKJsAbQIceZmveU3mvHmZ7X6x4UWc/YdOUwAclPnzI668MuK//zvzhBNqp4HhsPkPYJ+y9/73v/jbzp56KvPP/7x2LhhE9mbMyNyxY+Lf+rd+ffYGOTrIKBjsmyPbr3b/D8oMwH5knnBClMsvf/GfvvrVETfdlHnFFdl72ctqZ4QJcfYfYN+yd+ON+6//Hngge6ecUjsnHKrsrVw52L3PAEcHGRm178Brq93/TJLMv/mbg3sLbN+eecklNgjSFpmzZw901eutXFm7DTRD7QG4ttr9PyhLAHuRvRkzIi677OD+79/6rYjLL49YtCh7xx1XOzscmLP/AHuV+fWvT6weXLcu88/+rHZ+2JfsTZuWuX79xO95duzoF8hgBqB2/zNkmRdcMNhbotezQZCmyjz//MHe34sW1W4DzVF7AK6tdv8zRNk77rj+Mb9h+PGPbRCkaTIXLRrsfX3++bXbQHPUHoBrq93/DFHmDTcM9+2xbVvmJZfUbhdEOPvP8NUdfuur3f+DsgnwhfJrX4vYuHF4P/DIIyMuvzzzG9/IfNWrajePjnP2H2Dfsve7v5v5/e8Pv1Zcty7z3HNrt4/ucvafYatx190ktfufSZC9ww/P/PjHB5su3ZvdGwSPOKJ2G+kWZ/+ZDBXH3kao3f9Mouz98R9n75FHhv+2ueee7J18cu320R2Zl1022Hv2Yx+r3Qaap8qo2yC1+59Jlr3p0zO/9KXhv3VsEGRqOPvPZKk39DZD7f5nimTvL/8yc+PGob+DejfeaIMgk8nZfyZLnWG3OWr3P1Oov0Hw9tuH/zZ67LHMd76zdvsYTc7+M1lqDLpNUrv/mWL9DYL/+q+Z4+PDfSvZIMjwOfvPZKo7/NZXu/+pJPOss7L3s58N/R3VW7Eie7//+7Xbx2jI/NjHBntDHuyXYtFFlcbdxqjd/1TU3yB47bXDf1vZIMhwOPvPZKoy6jZI7f6nASZtg2B+/euZv/3btdsHsDcGUIiIzJNOyrzjjuEXAY89lvmOd9RuH8BLKQDgeZO3QXDXLhsEgaZRAMBLZJ59dubq1cMtAjIz/+d/bBAEmkIBAHuRvWOOybzuuuEXAc88kzlvXu32ASgAYD+yd9FFmZs3D78QuOGGzFe+snb7gO5SAMABZL7hDZl33jn8IuDnP8/e299eu31ANykA4CBM3gbB8fHMT33K09qAqaYAgEOQ+a53ZT7++HCLgMzMu+/O3u/9Xu32Ad2hAIBD1N8g+OUvD78I2LTJBkFgqigAYIImZ4PgV79au11ANygAYACZb3pT5r33DmXs723YkL3jj6/dJqAbFAAwoD0bBHftGuzj9Fd/VbstQHcoAGBIMv/0TzN/8YuJfZS++c3a+YFuUQDAEGUee2zmV75yaB+jX/7S1D8w1RQAMAmyd9FF2duy5eA+RhdcUDsv0D0KgHYrtQOwb5lvfnPEdddFnHbavv+vxYtL+Yu/GM6/99rXRjzwQMShPGJ4x46IrVsjNmyIWL068qGHovzwh5G33lrGNmyo3YdtlHnPPRGnn147xzCUUkb6GjPoINb2/ul6+2FSZW/atH1vEPzlLzNPOGFo/1YuXjxoRb9Hr5d5112ZH/lI5rHH1u7HtsjeGWcM7zWor3Z/Tvrr1fH+6Xr7YUpkvvvdv7lB8MILh/bzexddNHnDwDPPZH760/YpHFj2rrpq8l6HqVe7Pyf99ep4/3S9/TBlsnfccZnf+lb/o7N48dB+br72tZlPPz3po0Fvy5bMj388e4cfXrsvmyh7Rx/dL5ZGR+0+nfTXrOP90/X2w5TKLCVz3rzM17xmeD/zppumdli4++7Mk06q3ZdNk70Pf3hqX4fJV7tPJ/0163j/dL390GqZf/d3dYaGp5/OPPfc2u1vksx77qnzWkye2n06+a9Zt/un6+1vOzswO2xiu/6HaXw84sMfLuWaa2r3RW3ZO+OMKCtW1M4xbKO+y3vQQazt/dP19rfdWO0A1PT5z9cb/CMiDj88YsGC7P3t39buierKhz5UOwLQLaqvjsr8+7+PaMqd986dke99bxlbsqR2khqyd/TRUZ54ImL69NpZhm3U7/C6fgfc9fa3nRmADso88cSISy+tnWOPadOiXH995hveUDtJHRdeOIqDP9BsCoCOySwlYsGCulP/e/PKV0Z++cuZhx1WO8mUM/0PVKAA6Jr84AcjGrr7vpx1VsRHP1o7xlTK3hlnjMpjf4F2sf7SIdl73eui/PjHEcccUzvLvm3aFHnyyWVs/fraSaZC5pVXRsybVzvHZBn1Nd6ur4F3vf1tZwagIzJLiXLVVc0e/CMijjkmyj/+Y+0UUyF7Rx8d4ZscgToUAF3R5Kn/3/AP/9CNLxCy+Q+oRwHQAZknnhjlM5+pnePgveIVkX/917VTTDqb/4CKrL+MuMxSIpcsiTJnTu0sh+auu0p561trp4D96foaeNfb33ZmAEZdzpvXvsE/IuLss7N33HG1UwCMKgXAqGvV1P+LgpeId76zdgqAUaUAGHmveEXtBBN39tm1EwCMKgUAzVXe9KbaEQBGlQKABjv55NoJAEaVAoDmyqZ9XwHA6FAAjLznnqudYMJKm/cvADSbM5gdkPna10bOnBll1qyImTMjZs2KOPXUNmwQdE6YJhv0HHzk9OllbPPm2u2o1X6f77p0foftKQze+MaIWbP6vz/llIjjj6+dbTcXCJps4AIg3vKWUh58sHY7arXf57uuw2sHoJ5S1q6NWLv2pX+e+cpXRs6aFeX00/tfVTtzZsRb3hLxspfVzgyj5ZxzItpbANBuqi8OSvamTYty8smRp58eZfcywh/90WTPFrhDoMkGnwFYtSri1FNL2bWrdltqtN/nuy6dz0AyTzwx4g//sD9TcNpp/V+vf/2wfr4LBE02eAEQEXnJJWXs3/+9dltqtN/nuy6dz9Bl75hjIk45Zc8SwumnR/zBH/Qf73toXCBosqEUALFzZ+TcuWVs2bLa7Znq9vt816XzmRL9fQWnnx7ltNP6SwdnnnkwMwUuEDTZcAqAiIidOyP++Z8j588vY+Pjtds1Ve33+a5L51NN5rHHRp5xRpS3vS3i9NMjzzoryou/AdAFgiYbXgGw26pVEVdfHbl0acSaNWVsy5babZzM9vt819Wozs886qiIFSsipk2L2LSp/4cbN/aTbtoU2etFbN4c5bnnIp55pv9r69bIbdsifv3rKFu2RG7dGmXLloinn458+uky9swztdvFwcksJeJNb4o888woZ54ZceaZpZx5Zu1cg7Xpyisj5s2rnaOWUb/AD78AmFqDvj4KgHZrXOdnXn99xAUXDPenPvtsxMaN/SNvTz7Z//0LfuULfl92/37dulJ6vdr9QXtl7+ijozzxRMT06bWz1DLqF3gFgAKgzRrX+ZnvfnfE8uW1c0Ts2NGfRVi3rn8RX7cu4okn+gXE2rWRTz4ZZe3ayKeeatOaHVMnc968iCuvrJ2jplG/wCsAFABt1rjOzxwbi/zpT/tPp2uDXi9i/fp+QfDEEy8qGHJ34fDYY2XsqadqJ2VqZd5zT/8ERHeN+gVeAaAAaLNGdn72PvGJKJ/8ZO0cw/Xcc/2CYPXqKKtXR6xeHbl6dcTzMwnx6KOltPtiwh6Zs2dHrFxZO0dto36BVwAoANqskZ3ff7jMz38ecdhhtbNMnc2bI9as6f969NH+r+f/Ox99tIw9vymSVuj65r/dRv0CrwBQALRZYzs/86abIubOrZ2jOTZu/P9Zg7JqVeSDD/ZnEh56qJRt22qnYw+b//YY9Qu8AkAB0GaN7fzM970v4hvfqJ2jHZ58ck9BsHp15KpVUR58MGLNGicZpp7Nf3uM+gVeAaAAaLPGdn7/y2ceeyzihBNqZ2mvbdsif/KTKD/5ScQDD0Q8+GDkj38cZfXqtn75SBvY/LfHqF/gFQAKgDZrdOdnfupTER//eO0co2fHjohHHunPGqxaFXnvvf0ZAxsRB2Xz34uN+gVeAaAAaLNGd372Tj45ysMPT+RLZJiITZsiHnmk/zjSBx/sLyWsWFHKunW1k7WFzX8vNuoXeAWAAqDNGt/5md/7XsTb3147R7ft3mOwe7bg3nsjVq0yW/BiNv/9plG/wCsAFABt1vjOz95FF0VZuLB2Dl5q06b+voJ7791TFDz8cNf3FmTOmhVx3nkR731vxJ/8Sddnr0b9Aq8AUAC0WeM7P/PII/vP8D/22NpZOIDcujXKfff118BXruwXBw880NVHJWfv1a+OOPfciPPOi3LuuRGveEXtTFNt1C/wCgAFQJu1ovMz58+P+OhHa+dgInbujLj//og77+zy8kHmkUdGvvWtUd773oj3vS/ida+rnWkqjPoFXgGgAGizVnR+9k49tX9nyWjYtClyxYoozxcF8cMflrENG2qnmkovXio4++yIsbHamSbDqF/gFQAKgDZrTedn3ntvxGmn1c7BZPnpTyNWrIi8++6IH/wgYuXKri4dAEyFFhUAH/1oxPz5tXMwVbZt27OP4I47Im69tYz98pe1UwGMivYUAL1jjul/a97LX147C5Xk6tVR7rwz4o47Iu68s4t7CQCGpTUFQERE5he/GPH+99fOQVNs2BBx110Rt98e+b3vRVm5suvHEAEOVssKgHe8I+K222rnoKFy69aIH/ygv7nwjjsibr+9jD33XO1YAE3UqgIgIiJ7Dz0U5c1vrp2DNti9j+COOyKXL49yxx2lPPts7VQATdC+AiD/5V8iPv3p2jloo+3bI++6K8qyZRHLl0esXOnrkoGual8B0Dv++CiPPx4xbVrtLLTd5s0R3/texOLFEcuXl7J6de1EAFOldQVARETmokUR559fOwcjJlevjrJ8eX+54LvfLeVXv6odCWCytLMA6J13XpTFi2vnYJT1ev39A7sLAvsHgNHSzgIgDzssYs2aiN/5ndpZ6Ipt2/ZsJly2LOK++zyDAGizVhYAERGZn/xkxCc+UTsHXbVhQ8Qtt0QuXhyxdGkZ27SpdiKAQ9HiAuANb4h45JFR/RIV2mR8POLuu/ubCRcvLmXVqtqJAA6ktQVARET2li+P8u53184BL/L/mwlvuqk/O+BhREDztLsAyAsuiLj++to5YN+eeSZyyZIoixZFfuc7lgqApmh3AdB72cuiPPFExKteVTsLHNiOHRHf/W7kN78ZceutUR5/vJTt22unArqp1QVARETm5ZdHXHJJ7RwAcPDWri3lxBNrJmj/BrpcsKB2BABom9YXAGXsgQci7767dg4AaJPWFwB9V19dOwEAtMmIFADXX9//YhcA4GCMRAFQxrZsibzhhto5AKAtRqIAiIiIYhkAAA7WyBQApdx1V8SDD9bOAQBtMDIFQN8119ROAABtMGIFwMKFEZ67DgAHMlIFQCm/+lXkt79dOwcANN1IFQB9NgMCwIGMXgFQli2L+PnPa8cAgCYbuQKglF4v4gtfqJ0DAJps5AqAiIjIq6+O2LWrdgwAaKqRLADK2C9+EbFsWe0cANBUI1kARMTzswAAwN6MbgEQ3/pWxLp1tVMAQBONbAFQxnbujLz22to5AKCJRrYAiIiIsmBBRGbtGADQNCNdAJTyv/8bceedtXMAQNOMdAHQZzMgALxUBwqAr3414te/rp0CAJpk5AuAUrZv7xcBAMBuI18ARIRnAgDAS3SiAChjK1ZE/uhHtXMAQFN0ogCIiIhyzTW1IwBAU3SnAIgvfSli+/baKQCgCTpTAJTy619HLFpUOwcANEFnCoA+mwEBIKJzBcCtt0Y88kjtFABQW6cKgFIyI77whdo5AKC2ThUAfddcE7FzZ+0UAHTZPffUTtC5AqCUdesibrmldg4AuuzKK2sn6FwB0GczIAC1PP54xJIltVN0swDIm2+OWLu2dgwAOiivuqqUXbtqx+hkAVDGxscjFy6snQOArhkfj9KMzeidLAAiIqIsWBCRWTsGAB2S3/52KU88UTtGRIcLgFJWr4647bbaOQDokvqb/3brbAHQZzMgAFPl0UejLF9eO8VuHS8AbrwxYuPG2ikA6IKrriql16udYrdOFwClPPtsxHXX1c4BwKjbuTOiWZvPO10AREREfv7ztSMAMOoWLSrlySdrp3ihzhcAZez++yPrP5IRgFHWnM1/u3W+AIiIiGIzIACTJH/2s/630TaLAiAiIr/85Yht22rHAGAU/ed/9r+NtlkUABFRxp55JuKGG2rnAGDU7NgR8cUv1k6xNwqA3dIyAADDduONZWz9+top9kYB8LwydvvtEQ89VDsHAKOkeZv/dlMAvFA24wsaABgB+fDDEd//fu0Y+6IAeJGFC/sPawCAAZUrr2zi5r/dFAAvUMbWr49cvLh2DgDa7tlnm7r5bzcFwEt5JgAAA7vhhlKefrp2iv0ptQM0TebYWMSjj0a8/vW1swDQVm97Wyl33lk7xf6YAXiJ/jc1/dd/1c4BQFs99FDTB/8IBcDe5YIFEbt21Y4BQAvl5z5XO8LBsASwD5lLlkScc07tHAC0yfbtESeeWMrGjbWTHIgZgH2yGRCAQ/WVr7Rh8I8wA7BP2TviiCi/+EXEjBm1swDQEnnWWWXs7rtrxzgYZgD2oYzt2BF57bW1cwDQFvff35bBP0IBsH/lqqtqRwCgLf7jP2onOBSWAA4g8667Is4+u3YOAJpsy5bIE0/sf718O5gBOCCbAQE4gLz++jYN/hFmAA4o86ijItaujZg+vXYWAJrqjDNKuffe2ikAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgMGU2gHaLPMjH4n43Odq5wBgEuVtt5Wxd72rdoxhUwAMIHvHHBNl7dqIl7+8dhYAJsu73lXKbbfVTjFsY7UDtFkZ27Qp4lvfqp0DgEmSt902ioN/hAJgcPmFL9SOAMAkKf/2b7UjTFrTagdou8xSIh95JMob31g7CwBDNKJr/7uZARhQKZlRrr22dg4AhmyE7/4jzAAMReZJJ0X87GcRYwoqgFEw4nf/EWYAhqKUNWsiR3OTCEAnjfjdf4QCYIhsBgQYCSO88/+FLAEMSeaRR0asXRtx7LG1swAwiNE89/9SZgCGpJTt2yO+9rXaOQAYQEfu/iMUAENmGQCg1Tqw9v//Ta0dYNRk3n9/xCmn1M4BwCHqwM7/FzIDMGz5xS/WjgDABHTo7j/CDMDQZe/446M8/njEtGm1swBwkDp29x9hBmDoythTT0V85zu1cwBwCDp29w8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQHf9Hxq+eVt9R+huAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTEwLTAxVDIzOjMwOjU4KzAwOjAwbvImhAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0xMC0wMVQyMzozMDo1OCswMDowMB+vnjgAAAAASUVORK5CYII=",alt:"Your Ship"}):"dead"===O?Object(g.jsx)("img",{src:v,alt:"sunk ship"}):""===O?"":Object(g.jsx)(j.a,{icon:O})},l()())}))},l()())}));return Object(g.jsx)("div",{className:"boardGrid",children:h})},p=t.p+"static/media/island.bc724c3c.png",w=function(A,e){return{gameboard:A,attack:function(A,e){return A.recieveAttack(e,A.hitShip)},randomAttack:function(A,e){for(var t,n=[],r=0;r<e;r+=1)for(var c=!0;c;)t=[Math.floor(10*Math.random()),Math.floor(10*Math.random())],A.onlyIncLetter([t],"h")||0!==Object(d.intersectionWith)(n,[t],d.isEqual).length||(c=!1,n.push(t),A.recieveAttack(t,A.hitShip));return n}}},Z=function(A){var e=[["e","e","e","e","e","e","e","e","e","e"],["e","e","e","e","e","e","e","e","e","e"],["e","e","e","e","e","e","e","e","e","e"],["e","e","e","e","e","e","e","e","e","e"],["e","e","e","e","e","e","e","e","e","e"],["e","e","e","e","e","e","e","e","e","e"],["e","e","e","e","e","e","e","e","e","e"],["e","e","e","e","e","e","e","e","e","e"],["e","e","e","e","e","e","e","e","e","e"],["e","e","e","e","e","e","e","e","e","e"]],t=[],n=[5,4,3,3,2],r=[],c=[],a=function(A,t){return e[A][t]},s=function(A,t,n){return e[A][t]=n},u=function(){return t},d=function(){return r},o=function(){return n};function l(e,n){if(!function(A,e){if("down"===A)return b(e);if("across"===A)return j(e);return!1}(e,n))return!1;var r=A(o()[u().length],e,n);return!!g(r.getSquares(),"e")&&(function(A){n=A,n.getSquares().forEach((function(A){s([A[0]],[A[1]],u().length+1)})),e=[].concat(Object(i.a)(u()),[A]),t=e;var e;var n}(r),!0)}function g(A,e){for(var t=0;t<A.length;t+=1)if(!a([A[t][0]],[A[t][1]]).toString().includes(e))return!1;return!0}var b=function(A){return!(A[1]-o()[u().length]<-1)},j=function(A){return!(A[0]+o()[u().length]>10)};var v=function(A){return Math.floor(Math.random()*A)};function f(A){var e;e=[].concat(Object(i.a)(d()),[A]),r=e}function h(){var A,e=u().map((function(A){return A.getSunk()?A.getSquares():[]}));A=e.flat(1),c=A}return{getGridSqu:a,placeShip:l,getShips:u,recieveAttack:function(A){var e=a([A[0]],[A[1]]);return"h"!==e&&("e"===e?(s([A[0]],[A[1]],"h"),f(A),"h"):"sh"!==e&&(function(A,e){A.hit(e)}(u()[e-1],A),s([A[0]],[A[1]],"sh"),f(A),h(),"sh"))},allSunk:function(A){return 0===A.filter((function(A){return!A.getSunk()})).length},getHits:d,placeRandom:function(){for(var A=!1,e=["down","across"];!A;){var t=[v(10),v(10)];l(e[v(2)],t)&&(A=!0)}},getShipLengths:o,getSunkSquares:function(){return c},calcSunkSquares:h,onlyIncLetter:g,getGrid:function(){return e}}};var B=function(A){console.log("gameloop rendered");var e=Object(n.useState)(!1),t=Object(s.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)(!1),i=Object(s.a)(a,2),d=i[0],o=i[1],l=Object(n.useState)([]),b=Object(s.a)(l,2),j=b[0],v=b[1],B=Object(n.useState)(0),H=Object(s.a)(B,2),I=H[0],D=H[1],N=Object(n.useState)([]),M=Object(s.a)(N,2),P=M[0],E=M[1],x=Object(n.useState)([]),G=Object(s.a)(x,2),L=G[0],R=G[1],F=Object(n.useState)(0),X=Object(s.a)(F,2),k=X[0],y=X[1];function C(A,e){if(r)return!1;if(!h.attack(m.gameboard,A))return!1;E([A]),D((function(A){return A+1})),m.gameboard.allSunk(m.gameboard.getShips())&&(alert("You've won!"),c(!0));var t=m.randomAttack(h.gameboard,1);R(t),h.gameboard.allSunk(h.gameboard.getShips())&&(alert("Skynet won, goodbye!"),c(!0))}return k!==A.gameNum&&(console.log("NEW GAME MADE"),f=Z(u),O=Z(u,"comp"),h=w(f,"human"),m=w(O,"comp"),O.placeRandom(),O.placeRandom(),O.placeRandom(),O.placeRandom(),O.placeRandom(),o(!1),y(A.gameNum),D(0),console.log("turn",I)),d?Object(g.jsxs)("div",{className:"gameSpace",children:[Object(g.jsxs)("div",{children:["Game Number: ",A.gameNum," - Turn count: ",I]}),Object(g.jsx)(z,{grid:h.gameboard.getGrid(),hits:h.gameboard.getHits(),human:!0,setupDone:d,handleClick:C,sunkSquares:h.gameboard.getSunkSquares(),activeSquares:L}),Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{src:p,alt:"island board divider"}),Object(g.jsx)("img",{src:p,alt:"island board divider"}),Object(g.jsx)("img",{src:p,alt:"island board divider"}),Object(g.jsx)("img",{src:p,alt:"island board divider"}),Object(g.jsx)("img",{src:p,alt:"island board divider"}),Object(g.jsx)("img",{src:p,alt:"island board divider"}),Object(g.jsx)("img",{src:p,alt:"island board divider"})]}),Object(g.jsx)(z,{grid:m.gameboard.getGrid(),hits:m.gameboard.getHits(),human:!1,handleClick:C,setupDone:d,sunkSquares:m.gameboard.getSunkSquares(),activeSquares:P})]}):Object(g.jsxs)("div",{className:"gameSpace",children:[Object(g.jsxs)("select",{id:"directionForm",children:[Object(g.jsx)("option",{value:"down",children:"Down"}),Object(g.jsx)("option",{value:"across",children:"Across"})]}),Object(g.jsx)(z,{grid:h.gameboard.getGrid(),human:!0,setupDone:d,handleClick:function(A){var e=document.getElementById("directionForm").value;if(!h.gameboard.placeShip(e,A))return!1;5===h.gameboard.getShips().length&&(o(!0),c(!1))},hovered:j,hoverGuide:function(A){var e=document.getElementById("directionForm").value,t=h.gameboard.getShips().length,n=h.gameboard.getShipLengths(),r=u(n[t],e,A).getSquares();v(r)}})]})},H=t(6),I=t(10);var D=function(){H.b.add(I.a,I.b,I.c);var A="Welcome to Battleship. Sink all your opponents boats first to win.",e=Object(n.useState)(A),t=Object(s.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)(1),i=Object(s.a)(a,2),u=i[0],d=i[1];return console.log("APP RENDERED HEEEEEEEEEEEERRRREEEEEE"),Object(g.jsxs)("div",{className:"AppCont",children:[Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("header",{className:"App-header",children:Object(g.jsx)("h1",{children:"BATTLESHIP"})}),r,Object(g.jsxs)("nav",{children:[Object(g.jsx)("button",{onClick:function A(){d((function(A){return A+1})),c(Object(g.jsx)(B,{handleSetupStarted:A,newStart:!1,gameNum:u}))},children:"New Game"}),Object(g.jsx)("button",{onClick:function(){c(A)},children:"Main Menu"})]})]}),Object(g.jsxs)("div",{className:"iconCredits",children:["*Icons made by"," ",Object(g.jsx)("a",{href:"https://www.freepik.com",title:"Freepik",children:"Freepik"})," ","and"," ",Object(g.jsxs)("a",{href:"https://www.flaticon.com/authors/iconixar",title:"iconixar",children:["iconixar"," "]})," ","from"," ",Object(g.jsxs)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:["www.flaticon.com"," "]})]})]})};a.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(D,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.d3190958.chunk.js.map