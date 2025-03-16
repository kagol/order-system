---
title: ospp-latest v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.17"

---

# ospp-latest

> v1.0.0

Base URLs:

* <a href="http://localhost:3000">开发环境: http://localhost:3000</a>

# order

## GET 获取所有订单

GET /order

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|page|query|number| 否 |第几页|
|size|query|number| 否 |页大小|
|filter|query|string| 否 |筛选逻辑. 将会模糊搜索符合的商品. 会同时模糊搜索name和orderId两个字段, mysql语句如下|

#### 详细说明

**filter**: 筛选逻辑. 将会模糊搜索符合的商品. 会同时模糊搜索name和orderId两个字段, mysql语句如下

where name like '%filter%' or orderId like '%filter%'

> 返回示例

> 成功

```json
{
  "items": [
    {
      "id": 12,
      "name": "12号商品",
      "orderId": "7cdcf400-00d3-11f0-81d9-c7ce9a5d3c25",
      "isDel": true,
      "reason": "测试",
      "createAt": "2025-03-14T12:54:38.000Z",
      "updateAt": "2025-03-14T12:54:38.000Z",
      "creator": {
        "id": 1,
        "name": "admin",
        "role": [
          {
            "id": 1,
            "name": "admin"
          }
        ]
      }
    },
    {
      "id": 13,
      "name": "研究节节需",
      "orderId": "f4d514b0-00d3-11f0-aa09-a73aed8e80fe",
      "isDel": false,
      "reason": null,
      "createAt": "2025-03-14T12:57:59.000Z",
      "updateAt": "2025-03-14T12:57:59.000Z",
      "creator": {
        "id": 1,
        "name": "admin",
        "role": [
          {
            "id": 1,
            "name": "admin"
          }
        ]
      }
    },
    {
      "id": 14,
      "name": "八科好保",
      "orderId": "f57d62a0-00d3-11f0-aa09-a73aed8e80fe",
      "isDel": false,
      "reason": null,
      "createAt": "2025-03-14T12:58:00.000Z",
      "updateAt": "2025-03-14T12:58:00.000Z",
      "creator": {
        "id": 1,
        "name": "admin",
        "role": [
          {
            "id": 1,
            "name": "admin"
          }
        ]
      }
    },
    {
      "id": 15,
      "name": "化给委我调数",
      "orderId": "f62b55e0-00d3-11f0-aa09-a73aed8e80fe",
      "isDel": false,
      "reason": null,
      "createAt": "2025-03-14T12:58:01.000Z",
      "updateAt": "2025-03-14T12:58:01.000Z",
      "creator": {
        "id": 1,
        "name": "admin",
        "role": [
          {
            "id": 1,
            "name": "admin"
          }
        ]
      }
    },
    {
      "id": 16,
      "name": "立至片自广专道",
      "orderId": "f6c4fdd0-00d3-11f0-aa09-a73aed8e80fe",
      "isDel": false,
      "reason": null,
      "createAt": "2025-03-14T12:58:02.000Z",
      "updateAt": "2025-03-14T12:58:02.000Z",
      "creator": {
        "id": 1,
        "name": "admin",
        "role": [
          {
            "id": 1,
            "name": "admin"
          }
        ]
      }
    },
    {
      "id": 17,
      "name": "律思安员别时",
      "orderId": "f767cd80-00d3-11f0-aa09-a73aed8e80fe",
      "isDel": false,
      "reason": null,
      "createAt": "2025-03-14T12:58:03.000Z",
      "updateAt": "2025-03-14T12:58:03.000Z",
      "creator": {
        "id": 1,
        "name": "admin",
        "role": [
          {
            "id": 1,
            "name": "admin"
          }
        ]
      }
    },
    {
      "id": 18,
      "name": "争位它",
      "orderId": "f7f8e9f0-00d3-11f0-aa09-a73aed8e80fe",
      "isDel": false,
      "reason": null,
      "createAt": "2025-03-14T12:58:04.000Z",
      "updateAt": "2025-03-14T12:58:04.000Z",
      "creator": {
        "id": 1,
        "name": "admin",
        "role": [
          {
            "id": 1,
            "name": "admin"
          }
        ]
      }
    },
    {
      "id": 19,
      "name": "火示所合集",
      "orderId": "f8a3f700-00d3-11f0-aa09-a73aed8e80fe",
      "isDel": false,
      "reason": null,
      "createAt": "2025-03-14T12:58:05.000Z",
      "updateAt": "2025-03-14T12:58:05.000Z",
      "creator": {
        "id": 1,
        "name": "admin",
        "role": [
          {
            "id": 1,
            "name": "admin"
          }
        ]
      }
    },
    {
      "id": 20,
      "name": "活安之信",
      "orderId": "f93b06e0-00d3-11f0-aa09-a73aed8e80fe",
      "isDel": false,
      "reason": null,
      "createAt": "2025-03-14T12:58:06.000Z",
      "updateAt": "2025-03-14T12:58:06.000Z",
      "creator": {
        "id": 1,
        "name": "admin",
        "role": [
          {
            "id": 1,
            "name": "admin"
          }
        ]
      }
    },
    {
      "id": 21,
      "name": "却和须意七办",
      "orderId": "f9f248f0-00d3-11f0-aa09-a73aed8e80fe",
      "isDel": false,
      "reason": null,
      "createAt": "2025-03-14T12:58:08.000Z",
      "updateAt": "2025-03-14T12:58:08.000Z",
      "creator": {
        "id": 1,
        "name": "admin",
        "role": [
          {
            "id": 1,
            "name": "admin"
          }
        ]
      }
    }
  ],
  "total": 23
}
```

> 401 Response

```json
{
  "statusCode": 401,
  "message": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|401 未登录|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|403 权限不足|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» items|[object]|true|none||none|
|»» id|integer|true|none||none|
|»» name|string|true|none||none|
|»» orderId|string|true|none||none|
|»» isDel|boolean|true|none||none|
|»» reason|string¦null|true|none||none|
|»» createAt|string|true|none||none|
|»» updateAt|string|true|none||none|
|»» creator|object|true|none||none|
|»»» id|integer|true|none||none|
|»»» name|string|true|none||none|
|»»» role|[object]|true|none||none|
|»»»» id|integer|true|none||none|
|»»»» name|string|true|none||none|
|» total|integer|true|none||none|

状态码 **401**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» statusCode|number|true|none||none|
|» message|string|true|none||none|

状态码 **403**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» statusCode|number|false|none||none|
|» message|string|false|none||none|

## POST 创建一个订单

POST /order

> Body 请求参数

```json
{
  "name": "string",
  "desc": "string",
  "orderImage": "string",
  "cost": 0,
  "shopName": "string"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|body|body|object| 否 ||none|
|» name|body|string| 是 | 订单名称|none|
|» desc|body|string| 是 | 订单简介|none|
|» orderImage|body|string| 是 | 订单图|none|
|» cost|body|number| 是 | 价格|none|
|» shopName|body|string| 是 | 商家名|none|

> 返回示例

> 成功

```json
{
  "id": 35,
  "name": "断越识节张",
  "desc": "sint Ut",
  "img": "http://dummyimage.com/400x400",
  "cost": 17,
  "orderId": "5858dcc0-00d8-11f0-a1a9-b9ce7c159ae1",
  "isDel": false,
  "reason": null,
  "createAt": "2025-03-14T13:29:24.000Z",
  "updateAt": "2025-03-14T13:29:24.000Z",
  "creator": {
    "id": 1,
    "name": "admin",
    "role": [
      {
        "id": 1,
        "name": "admin"
      }
    ]
  },
  "param": {
    "size": "xxl",
    "color": "red"
  }
}
```

> 401 Response

```json
{
  "statusCode": 401,
  "message": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|成功|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|401 未登录|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|403 权限不足|Inline|

### 返回数据结构

状态码 **201**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» id|integer|true|none|订单id|none|
|» name|string|true|none|订单名|none|
|» desc|string|true|none|订单简介|none|
|» img|string|true|none|订单图|none|
|» cost|integer|true|none|订单价格|none|
|» orderId|string|true|none|订单uuid|none|
|» isDel|boolean|true|none|是否删除|none|
|» reason|string¦null|false|none|删除理由|none|
|» createAt|string|true|none|创建时间|none|
|» updateAt|string|true|none|修改时间|none|
|» shopName|string|true|none|商家名|none|
|» creator|object|true|none|创建者|none|
|»» id|integer|true|none||none|
|»» name|string|true|none||none|
|»» role|[object]|true|none||none|
|»»» id|integer|false|none||none|
|»»» name|string|false|none||none|
|» param|object|true|none|参数|none|
|»» size|string|true|none||none|
|»» color|string|true|none||none|

状态码 **401**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» statusCode|number|true|none||none|
|» message|string|true|none||none|

状态码 **403**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» statusCode|number|false|none||none|
|» message|string|false|none||none|

## DELETE 删除一个订单

DELETE /order

> Body 请求参数

```json
{
  "reason": "string"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|query|number| 否 ||订单id|
|body|body|object| 否 ||none|
|» reason|body|string| 是 | 删除理由|none|

> 返回示例

> 成功

```json
{
  "id": 33,
  "name": "包设进第和论",
  "desc": "culpa adipisicing est in",
  "img": "http://dummyimage.com/400x400",
  "cost": 100,
  "orderId": "c1095bb0-00d7-11f0-b4bf-5ff9eb087e7d",
  "isDel": true,
  "reason": "测试",
  "createAt": "2025-03-14T13:25:10.000Z",
  "updateAt": "2025-03-14T13:25:10.000Z",
  "creator": {
    "id": 1,
    "name": "admin",
    "role": [
      {
        "id": 1,
        "name": "admin"
      }
    ]
  },
  "param": {
    "size": "xxl",
    "color": "red"
  }
}
```

> 401 Response

```json
{
  "statusCode": 401,
  "message": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|401 未登录|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|403 权限不足|Inline|

### 返回数据结构

状态码 **401**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» statusCode|number|true|none||none|
|» message|string|true|none||none|

状态码 **403**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» statusCode|number|false|none||none|
|» message|string|false|none||none|

## PATCH 修改一个订单

PATCH /order

> Body 请求参数

```json
{
  "name": "string",
  "desc": "string",
  "orderImage": "string",
  "cost": 0,
  "isDel": "string",
  "reason": "string"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|query|number| 否 ||none|
|body|body|object| 否 ||none|
|» name|body|string| 否 | 订单名|none|
|» desc|body|string| 否 | 订单简介|none|
|» orderImage|body|string| 否 | 订单图|none|
|» cost|body|number| 否 | 订单价格|none|
|» isDel|body|string| 否 | 是否删除|none|
|» reason|body|string| 否 | 删除理由|none|

> 返回示例

> 成功

```json
{
  "id": 12,
  "name": "12号商品",
  "desc": "这是第12号订单",
  "img": "http://dummyimage.com/400x400",
  "cost": 0,
  "orderId": "7cdcf400-00d3-11f0-81d9-c7ce9a5d3c25",
  "isDel": true,
  "reason": "测试",
  "createAt": "2025-03-14T12:54:38.000Z",
  "updateAt": "2025-03-14T12:54:38.000Z",
  "creator": {
    "id": 1,
    "name": "admin",
    "role": [
      {
        "id": 1,
        "name": "admin"
      }
    ]
  },
  "param": {
    "size": "xxl",
    "color": "red"
  }
}
```

> 401 Response

```json
{
  "statusCode": 401,
  "message": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|401 未登录|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|403 权限不足|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» id|integer|true|none|订单id|恒定永不变|
|» name|string|true|none|订单名|如果传入了新name, 则是传入的name|
|» desc|string|true|none|订单简介|如果传入了desc, 则是新desc|
|» img|string|true|none|订单图|如果传入了orderImg, 则是传入的orderImg|
|» cost|integer|true|none|订单价格|如果传入了cost, 则是传入的cost|
|» orderId|string|true|none|订单uuid|none|
|» isDel|boolean|true|none|是否删除|如果传入了isDel，则是新isDel|
|» reason|string¦null|false|none|删除理由|如果传入了isDel, 且isDel不为空, 则会返回传入的reason|
|» createAt|string|true|none|创建时间|none|
|» updateAt|string|true|none|修改时间|none|
|» creator|object|true|none|创建人|none|
|»» id|integer|true|none||none|
|»» name|string|true|none||none|
|»» role|[object]|true|none||none|
|»»» id|integer|false|none||none|
|»»» name|string|false|none||none|
|» param|object|true|none|参数|none|
|»» size|string|true|none||none|
|»» color|string|true|none||none|

状态码 **401**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» statusCode|number|true|none||none|
|» message|string|true|none||none|

状态码 **403**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» statusCode|number|false|none||none|
|» message|string|false|none||none|

## GET 获取某个订单

GET /order/{id}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|string| 是 ||订单id|

> 返回示例

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "desc": "string",
  "img": "string",
  "cost": 0,
  "orderId": "string",
  "isDel": true,
  "reason": "string",
  "createAt": "string",
  "updateAt": "string",
  "creator": {
    "id": 0,
    "name": "string",
    "role": [
      {
        "id": 0,
        "name": "string"
      }
    ]
  },
  "param": {
    "size": "string",
    "color": "string"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|401 未登录|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|403 权限不足|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» id|integer|true|none|订单id|none|
|» name|string|true|none|订单名|none|
|» desc|string|true|none|订单简介|none|
|» img|string|true|none|订单吐|none|
|» cost|integer|true|none|订单价格|none|
|» orderId|string|true|none|订单uuid|none|
|» isDel|boolean|true|none|是否删除|none|
|» reason|string¦null|false|none|删除理由|none|
|» createAt|string|true|none|创建时间|none|
|» updateAt|string|true|none|修改时间|none|
|» creator|object|true|none|创建者|none|
|»» id|integer|true|none|创建者id|none|
|»» name|string|true|none|创建者名称|none|
|»» role|[object]|true|none|创建者角色|none|
|»»» id|integer|false|none||none|
|»»» name|string|false|none||none|
|» param|object|true|none|参数|none|
|»» size|string|true|none||none|
|»» color|string|true|none||none|

状态码 **401**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» statusCode|number|true|none||none|
|» message|string|true|none||none|

状态码 **403**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» statusCode|number|false|none||none|
|» message|string|false|none||none|

## POST 上传一个商品图

POST /order/upload

> Body 请求参数

```yaml
file: string

```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|body|body|object| 否 ||none|
|» file|body|string(binary)| 否 ||图片文件|

> 返回示例

> 成功

```json
"/image/9b76818712a725e891dbfa171a1e96cde4c4ed920bcfdbb283b27c781dbf1c7b.jpg"
```

> 401 Response

```json
{
  "statusCode": 401,
  "message": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|401 未登录|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|403 权限不足|Inline|

### 返回数据结构

状态码 **401**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» statusCode|number|true|none||none|
|» message|string|true|none||none|

状态码 **403**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» statusCode|number|false|none||none|
|» message|string|false|none||none|

## GET 静态资源访问

GET /{name}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|name|path|string| 是 ||静态资源图片, 要携带前缀 /image 前缀|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|401 未登录|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|403 权限不足|Inline|

### 返回数据结构

状态码 **401**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» statusCode|number|true|none||none|
|» message|string|true|none||none|

状态码 **403**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» statusCode|number|false|none||none|
|» message|string|false|none||none|

# 数据模型

